// middleware.js
console.log("Top-level console in middleware.js file");

import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Inside middleware function, URL:", request.url);

  return NextResponse.next();
}
