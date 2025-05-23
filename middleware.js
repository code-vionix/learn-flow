// middleware.js
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

// Routes that need authentication
const protectedRoutes = ["/dashboard", "student", "admin"];

// Routes that should not require authentication
const publicRoutes = [ "/login", "/register", "/api/auth", "/"]; // include `/api/auth` for NextAuth routes

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Skip public routes
  const isPublic = publicRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
  if (isPublic) return NextResponse.next();

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(`${route}`)
  );
console.log("isProtected", isProtected);
console.log("pathname", pathname);
  const token = await getToken({ req, secret });
  console.log("Auth Token:", token);

  if (isProtected && !token) {
    console.log("Unauthorized");
    const loginUrl = new URL("/login", req.url); // or `/api/auth/signin` if using NextAuth's default
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|images|css|js).*)"], // Run middleware for all non-static paths
};
