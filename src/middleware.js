import { NextResponse } from "next/server";

export function middleware(req) {
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }

  const userAgent = req.headers.get("user-agent") || "";
  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|Windows Phone|BlackBerry/i.test(userAgent);

  if (!isMobile) {
    return NextResponse.redirect(new URL("/not-supported", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/game/:path*"],
};
