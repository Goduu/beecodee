import { NextResponse, type NextRequest } from "next/server"
import { updateSession } from "./lib/supabase/middleware"
import { LOCALES } from "./components/Localization/localization"
import { fetchUserData } from "./lib/supabase/api/fetchUserData"

const PROTECTED_PATHS = ["/path", "/profile", "/honeycomb", "lessons"]

function isProtectedPath(pathname: string): boolean {
  return !!PROTECTED_PATHS.find((path) => pathname.includes(path))
}

export async function middleware(request: NextRequest) {
  const userData = await fetchUserData()
  const { pathname } = request.nextUrl
  if (isProtectedPath(pathname)) {
    if (!userData) {
      return NextResponse.redirect(request.nextUrl.origin)
    }
  } else {
    if (userData) {
      return NextResponse.redirect(request.nextUrl.pathname === "/" ?
        `${request.nextUrl.origin}/path` :
        `${request.nextUrl.origin}${request.nextUrl.pathname}/path`)
    }
  }

  const pathnameHasLocale = LOCALES.some((locale) => pathname.includes(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale || pathname.includes("/api")) {
    return await updateSession(request)
  }

  request.nextUrl.pathname = `/${userData?.currentLanguage || "en"}/${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp3)$).*)",
  ],
}
