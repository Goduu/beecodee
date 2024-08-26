import { LessonHeader } from "@/components/LessonHeader"
import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Review Lesson",
}

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="ml-10 flex flex-col gap-20 py-10 md:ml-20">
      <LessonHeader size="medium" />
      {children}
    </div>
  )
}
