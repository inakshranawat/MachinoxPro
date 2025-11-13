import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = request.nextUrl;

  // ✅ Protected admin routes
  const protectedRoutes = ["/admin/panel", "/admin/sitemap"];

  // ✅ Redirect unauthenticated users to /admin/auth
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !token) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/admin/auth";
    return NextResponse.redirect(loginUrl);
  }

  // ✅ Redirect logged-in admins away from /admin/auth → /admin/panel
  if (pathname.startsWith("/admin/auth") && token) {
    const panelUrl = request.nextUrl.clone();
    panelUrl.pathname = "/admin/panel";
    return NextResponse.redirect(panelUrl);
  }

  // ✅ Allow everything else
  return NextResponse.next();
}
