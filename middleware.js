import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/register")) {
    if (request.cookies.get("authToken")?.value) {
      return NextResponse.redirect(new URL("/channels", request.url));
    }
  }
}
