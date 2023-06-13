import { NextResponse } from "next/server";
const crypto = require("crypto");
import { prisma } from "@/prisma.ts";
// import { setCookie } from "cookies-next";

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

    // setCookie("authToken", userToken, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   path: "/",
    //   maxAge: 60 * 60 * 24 * 28,
    // });

    // return NextResponse.redirect("/channel/" + userName);
    const response = NextResponse.json({
      message: "User created",
      success: true,
      redirect: "/channel/@me",
    });

    response.headers.set(
      "Set-Cookie",
      `authToken=${userToken}; Path=/; HttpOnly; Secure; Max-Age=2592000; SameSite=Strict`
    );

    return response;
  }
}
