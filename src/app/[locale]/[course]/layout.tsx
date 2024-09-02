import { ReactNode } from "react"
import { BeeLocale } from "@/components/Localization/localization"
import { upsertUserCurrentData } from "@/lib/supabase/api/upsertUserCurrentData"
import { allCourses } from "@contentlayer/generated"
import { fetchUserData } from "@/lib/supabase/api/fetchUserData"
import { Header } from "@/components/Header"
import { UnitHoneyCombModal } from "@/components/HoneyComb/UnitHoneyCombModal"
import { MountChecker } from "@/lib/MountChecker"

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

  return (
    <>
      <Header />
      <UnitHoneyCombModal />
      <div className="flex min-h-screen flex-col place-items-center px-4 py-12 pl-0 leading-relaxed md:ml-40">
        {children}
        <MountChecker />
      </div>
    </>
  )
}
