import { NextResponse } from "next/server";
import { prisma } from "@/prisma.ts";
// import { cookies } from "next/headers";

export function GET() {
  return NextResponse.json({ success: true });
}

export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;
  console.log(email, password);
  const user = await prisma.user.findFirst({
    where: {
      email: email,
      password: password,
    },
  });
  console.log(user);
  if (user) {
    // handle sessions by adding username to session
    // request.session.set('username', username);
    // @TODO use iron session to handle sessions
    // cookies.set("authToken", user.authToken);
    const response = NextResponse.json({
      redirect: "/channels",
      success: true,
    });

    response.headers.set(
      "Set-Cookie",
      `authToken=${user.authToken}; Path=/; HttpOnly; Secure; Max-Age=2592000; SameSite=Strict`
    );

    return response;
  } else {
    return NextResponse.json({
      message: "Invalid username or password",
      success: false,
    });
  }
}
