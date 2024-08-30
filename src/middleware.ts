import { NextResponse, type NextRequest } from "next/server"
import { updateSession } from "./lib/supabase/middleware"
import { fetchUserData } from "./lib/supabase/api/fetchUserData"
import { BeeLocale } from "./components/Localization/localization"
import { headers } from "next/headers"

const PROTECTED_PATHS = ["path", "profile", "honeycomb", "lessons", "review", "question-builder"]
const NOT_PROTECTED_PATHS = ["home", "get-started", "api"]

const getRouteName = (pathname: string) => {
  return (
    PROTECTED_PATHS.find((path) => pathname.includes(path)) ||
    NOT_PROTECTED_PATHS.find((path) => pathname.includes(path)) ||
    "home"
  )
}

const getLocaleFromPathName = (pathname: string, acceptLanguage: string | null) => {
  switch (true) {
    case pathname.includes("/en"):
      return "en"
    case pathname.includes("/es"):
      return "es"
    case pathname.includes("/fr"):
      return "fr"
    case pathname.includes("/de"):
      return "de"
    case pathname.includes("/pt"):
      return "pt"
    default:
      switch (true) {
        case acceptLanguage?.includes("es"):
          return "es"
        case acceptLanguage?.includes("fr"):
          return "fr"
        case acceptLanguage?.includes("de"):
          return "de"
        case acceptLanguage?.includes("pt"):
          return "pt"
        case acceptLanguage?.includes("en"):
          return "en"
        default:
          return undefined
      }
  }
}

export async function middleware(request: NextRequest) {
  // const userData = await fetchUserData()
  const headersList = headers()
  const acceptLanguage = headersList.get("accept-language")
  const { pathname } = request.nextUrl
  const routeName = getRouteName(pathname)
  const routes = await getRoutes()
  const locale = getLocaleFromPathName(pathname, acceptLanguage)
  const searchParams = request.nextUrl.searchParams

  switch (routeName) {
    case "api":
      return await updateSession(request)
    case "home":
      if (request.nextUrl.pathname === routes.home(locale)) {
        return await updateSession(request)
      }
      request.nextUrl.pathname = routes.home(locale)
      return NextResponse.redirect(request.nextUrl)
    case "path":
      if (request.nextUrl.pathname === routes.path(locale)) {
        return await updateSession(request)
      }
      request.nextUrl.pathname = routes.path(locale)
      return NextResponse.redirect(request.nextUrl)
    case "get-started":
      if (request.nextUrl.pathname === routes.getStarted(locale)) {
        return await updateSession(request)
      }
      request.nextUrl.pathname = routes.getStarted(locale)
      return NextResponse.redirect(request.nextUrl)
    case "lessons":
      const slug = pathname.split("/lessons/")[1]
      if (request.nextUrl.pathname === routes.lessons(locale, slug)) {
        return await updateSession(request)
      }
      request.nextUrl.pathname = routes.lessons(locale, slug)
      return NextResponse.redirect(request.nextUrl)
    case "review":
      if (request.nextUrl.pathname === routes.review(locale, searchParams.toString())) {
        return await updateSession(request)
      }
      request.nextUrl.pathname = routes.review(locale, searchParams.toString())
      return NextResponse.redirect(request.nextUrl)
    case "question-builder":
      if (request.nextUrl.pathname === routes.questionBuilder(locale)) {
        return await updateSession(request)
      }
      request.nextUrl.pathname = routes.questionBuilder(locale)
      return NextResponse.redirect(request.nextUrl)
    default:
      return await updateSession(request)
  }
}

const getRoutes = async () => {
  const userData = await fetchUserData()

  if (!userData) {
    return {
      home: (locale?: BeeLocale) => `/${locale || "en"}`,
      path: (locale?: BeeLocale) => `/${locale || "en"}`,
      profile: (locale?: BeeLocale) => `/${locale || "en"}`,
      honeycomb: (locale?: BeeLocale) => `/${locale || "en"}`,
      lessons: (locale?: BeeLocale) => `/${locale || "en"}`,
      review: (locale?: BeeLocale) => `/${locale || "en"}`,
      questionBuilder: (locale?: BeeLocale) => `/${locale || "en"}`,
      getStarted: (locale?: BeeLocale) => `/${locale || "en"}/get-started`,
    }
  }

  return {
    home: (locale?: BeeLocale) => `/${locale || userData.currentLanguage}`,
    path: (locale?: BeeLocale) => `/${locale || userData.currentLanguage}/${userData.currentCourse}/path`,
    profile: (locale?: BeeLocale) => `/${locale || userData.currentLanguage}/profile`,
    honeycomb: (locale?: BeeLocale) => `/${locale || userData.currentLanguage}/honeycomb`,
    lessons: (locale?: BeeLocale, slug?: string) => `/${locale || userData.currentLanguage}/lessons/${slug}`,
    getStarted: (locale?: BeeLocale) => `/${locale || userData.currentLanguage}/get-started`,
    review: (locale?: BeeLocale, searchParams?: string) =>
      `/${locale || userData.currentLanguage}/lessons/review${searchParams}`,
    questionBuilder: (locale?: BeeLocale) => `/${locale || userData.currentLanguage}/question-builder`,
  }
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
