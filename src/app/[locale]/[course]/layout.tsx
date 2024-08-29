import { ReactNode } from "react"
import { BeeLocale } from "@/components/Localization/localization"
import { upsertUserCurrentData } from "@/lib/supabase/api/upsertUserCurrentData"
import { allCourses } from "@contentlayer/generated"
import { fetchUserData } from "@/lib/supabase/api/fetchUserData"

type RootLayoutProps = {
  children: ReactNode
  params: {
    locale: BeeLocale
    course: string
  }
}

export default async function Layout({ children, params }: RootLayoutProps) {
  const { locale, course } = params
  const userData = await fetchUserData()
  const courses = allCourses.map((course) => course.slugAsParams)

  if (courses.includes(params.course)) {
    if (!userData) {
      await upsertUserCurrentData({ courseId: course, language: locale })
    } else {
      if (course !== userData.currentCourse) {
        await upsertUserCurrentData({ courseId: course })
      }
    }
  }

  return children
}
