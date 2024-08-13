import { ActivityContextWrapper } from "@/components/Activity/ActivityContext"
import { LessonProgressBar } from "@/components/LessonProgressBar"
import { Activity, allActivities, allLessons } from "@contentlayer/generated"
import { Inter } from "next/font/google"
import { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

type RootLayoutProps = {
  children: ReactNode
  params: {
    slug: string[]
  }
}

async function getActivitiesFromParams(params: RootLayoutProps["params"]) {
  const slug = params?.slug?.join("/")
  const lesson = allLessons.find((lesson) => lesson.slugAsParams === slug)
  const activities = allActivities.filter((activity) => {
    if (!lesson) {
      return null
    }
    const spitedActivitySlugArray = activity.slugAsParams.split("/")
    const activitySlug = spitedActivitySlugArray[spitedActivitySlugArray.length - 1]
    return lesson.activities.includes(activitySlug)
  })

  return lesson?.activities.map((activitySlug) => {
    const activity = activities.find((activity) => activity.slugAsParams.includes(activitySlug))
    return activity
  }) as Activity[]
}

export async function generateStaticParams(): Promise<RootLayoutProps["params"][]> {
  return allLessons.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function Layout({ children, params }: RootLayoutProps) {
  const activities = await getActivitiesFromParams(params)

  return (
    <ActivityContextWrapper activities={activities}>
      <div className="flex flex-col gap-20">
        <LessonProgressBar size="medium" />
        <div>
          {children}
        </div>
      </div>
    </ActivityContextWrapper>
  )
}
