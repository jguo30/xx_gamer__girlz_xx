import { NextResponse } from "next/server";

export function middleware(request) {
  if (
    request.nextUrl.pathname.startsWith("/register") ||
    request.nextUrl.pathname.startsWith("/login")
  ) {
    if (request.cookies.get("authToken")?.value) {
      return NextResponse.redirect(new URL("/channels", request.url));
    }
  }
}
