import { NextResponse } from "next/server";
const crypto = require("crypto");
import { prisma } from "@/prisma.ts";
import { cookies } from "next/headers";

export function GET() {
  return NextResponse.json({ success: true });
}

function generateAuthToken() {
  const token = crypto.randomBytes(30).toString("hex");
  return token;
}

export async function POST(request) {
  const body = await request.json();
  //   console.log(generateAuthToken());
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
    const userToken = generateAuthToken();
    const user = await prisma.user.create({
      data: {
        email: email,
        userName: userName,
        password: password,
        authToken: userToken,
      },
    });

    console.log(user);

    // add usertoken to cookie
    cookies.set("authToken", userToken, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
      secure: true,
    });

    // return NextResponse.redirect("/channel/" + userName);
    return NextResponse.json({
      message: "User created",
      success: true,
      redirect: "/channel/@me",
    });
  }
}
