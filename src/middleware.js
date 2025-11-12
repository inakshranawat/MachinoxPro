import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // ✅ Protected admin routes
  const protectedRoutes = ["/admin/panel", "/admin/sitemap"];

  // ✅ Redirect unauthenticated users to /admin/auth
  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/admin/auth";
    return NextResponse.redirect(loginUrl);
  }

  // ✅ Redirect logged-in admins away from /admin/auth → /admin/panel
  if (pathname.startsWith("/admin/auth") && token) {
    const panelUrl = req.nextUrl.clone();
    panelUrl.pathname = "/admin/panel";
    return NextResponse.redirect(panelUrl);
  }

  // ✅ Allow everything else
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // applies to all admin routes
};
