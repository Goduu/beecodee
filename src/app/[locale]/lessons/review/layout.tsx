import { LessonHeader } from "@/components/LessonHeader"
import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Review Lesson",
}

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-full w-full flex-col">{children}</div>
    </div>
  )
}
