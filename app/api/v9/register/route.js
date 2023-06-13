import { NextResponse } from "next/server";

import { prisma } from "@/prisma.ts";

export function GET() {
  return NextResponse.json({ success: true });
}

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  const { email, userName, password } = body;

  if (!email || !userName || !password) {
    return NextResponse.json({
      message: "Please fill in all fields",
      success: false,
    });
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [
        {
          email,
        },
        {
          userName,
        },
      ],
    },
  });

  console.log(existingUser);
  if (existingUser) {
    return NextResponse.json({
      message: "User already exists",
      success: false,
    });
  } else {
    const user = await prisma.user.create({
      data: {
        email: email,
        userName: userName,
        password: password,
      },
    });

    console.log(user);

    // 

    return NextResponse.redirect("/channel/@me");
  }
}
