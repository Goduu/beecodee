import { LessonProgressBar } from "@/components/LessonProgressBar"
import { ReactNode } from "react"

type RootLayoutProps = {
  children: ReactNode
  params: {
    slug: string[]
  }
}


export default async function Layout({ children, params }: RootLayoutProps) {

  return (
      <div className="flex flex-col gap-20 py-10 ml-10 md:ml-20">
        <LessonProgressBar size="medium" />
        {children}
      </div>
  )
}
