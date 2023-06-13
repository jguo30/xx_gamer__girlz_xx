import { NextResponse } from "next/server";

export async function GET(request) {
  // parse cookies
  const cookies = request.headers.get("cookie");
  const parsedCookies = Object.fromEntries(
    cookies.split("; ").map((c) => {
      const [key, v] = c.split("=");
      return [key, decodeURIComponent(v)];
    })
  );
  const authToken = parsedCookies.authToken;
  console.log(authToken);

  if (!authToken) {
    return NextResponse.json({
      success: false,
      message: "No auth token found",
    });
  }

  const user = await prisma.user.findFirst({
    where: {
      authToken: authToken,
    },
  });

  if (!user) {
    return NextResponse.json({
      success: false,
      message: "Invalid auth token",
    });
  }

  return NextResponse.json({
    success: true,
    user: {
      userName: user.userName,
      email: user.email,
      id: user.id,
    },
  });
}
