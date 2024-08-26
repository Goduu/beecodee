import { LessonHeader } from "@/components/LessonHeader"
import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Review Lesson",
}

export default async function Layout({ children }: { children: ReactNode }) {

  return (
    <div className="flex flex-col gap-20 py-10 ml-10 md:ml-20">
      <LessonHeader size="medium" />
      {children}
    </div>
  )
}
