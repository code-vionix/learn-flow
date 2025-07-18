import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// const secret = process.env.NEXTAUTH_SECRET;

// Routes that need authentication
// const protectedRoutes = ["/dashboard", "/student", "/admin", "/player"];

// Routes that should not require authentication
// const publicRoutes = ["/login", "/register", "/api/auth", "/"];

export async function middleware(req) {
  // Temporarily allow all routes
  return NextResponse.next();
  
  /* Authentication system commented out
  const { pathname } = req.nextUrl;

  // Allow public routes through
  const isPublic = publicRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
  if (isPublic) return NextResponse.next();

  // Check if the route is protected
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const token = await getToken({ req, secret });

  // Redirect to login if trying to access protected route without a token
  if (isProtected && !token) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }
  */
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|images|css|js).*)"],
};
