import { BeeLocale } from "@/components/Localization/localization"

export const routes = {
  home: (locale?: BeeLocale) => (locale ? `/${locale}` : "/"),
  path: (locale?: BeeLocale, course?: string) =>
    locale ? (course ? `/${locale}/${course}/path` : `/${locale}/path`) : "/path",
  profile: (locale?: BeeLocale) => (locale ? `/${locale}/profile` : "/profile"),
  honeycomb: (locale?: BeeLocale) => `/${locale}/honeycomb`,
  lessons: (slug: string) => `/lessons/${slug}`,
  getStarted: (locale?: BeeLocale) => (locale ? `/${locale}/get-started` : "/get-started"),
  review: (searchParams: string) => `/lessons/review${searchParams}`,
  questionBuilder: (locale?: BeeLocale) => (locale ? `/${locale}/question-builder` : "/question-builder"),
}
