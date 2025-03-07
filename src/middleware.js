import { NextResponse } from "next/server";

export function middleware(req) {
  // Redirect all traffic to 404
  return NextResponse.redirect(new URL("/404", req.url));
}

export const config = {
  // Match all routes except 404 page itself
  matcher: ["/((?!404).*)"],
};
