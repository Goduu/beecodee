import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from './lib/supabase/middleware'
import { userMetadata } from './lib/auth'
import { LOCALES } from './components/Localization/localization'

const PROTECTED_PATHS = ['/path', '/profile', '/honeycomb', 'lessons']

function isProtectedPath(pathname: string): boolean {
  return !!PROTECTED_PATHS.find((path) => pathname.includes(path))
}

function getLocale(request: NextRequest) {
  // @ToDo verify possibility to check users default locale
  return 'en'
}
export async function middleware(request: NextRequest) {
  const userData = await userMetadata()
  const { pathname } = request.nextUrl

  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.includes(`/${locale}/`) || pathname === `/${locale}`
  )

  if (isProtectedPath(pathname)) {
    if (!userData) {
      return NextResponse.redirect(request.nextUrl.origin)
    }
  } else {
    if (userData) {
      return NextResponse.redirect(`${request.nextUrl.origin}/path`)
    }
  }

  if (pathnameHasLocale || pathname.includes("/api")) return await updateSession(request)

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

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
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}