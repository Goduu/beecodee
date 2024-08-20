import { notFound } from "next/navigation"

import { Metadata } from "next"
import { Activity, allActivities, allLessons } from "@contentlayer/generated"
import { LessonBlock } from "@/components/Activity/LessonBlock"

interface ActivityProps {
  params: {
    slug: string[]
  }
}

async function getLessonFromParams(params: ActivityProps["params"]) {
  const slug = params?.slug?.join("/")

  const lesson = allLessons.find((lesson) => lesson.slugAsParams === slug)

  if (!lesson) {
    null
  }

  return lesson
}

export async function generateMetadata({
  params,
}: ActivityProps): Promise<Metadata> {
  const lesson = await getLessonFromParams(params)

  if (!lesson) {
    return {}
  }

  return {
    title: `Beecodee: ${lesson.description}`
  }
}

export async function generateStaticParams(): Promise<ActivityProps["params"][]> {
  return allLessons.map((lesson) => ({
    slug: lesson.slugAsParams.split("/"),
  }))
}

export default async function LessonPage({ params }: ActivityProps) {
  const lesson = await getLessonFromParams(params)
  if (!lesson) {
    notFound()
  }

  const activityMap = new Map<string, Activity>()

  allActivities.forEach((activity) => {
    activityMap.set(activity.slugAsParams, activity)
  })

  return (
    <div className="flex text-center justify-center">
      <div className="flex flex-col items-center gap-8 min-h-[450px] w-[398px] sm:w-[600px]">
        <LessonBlock lessonXp={lesson.xp} activityMap={activityMap} />
      </div>
    </div>
  )
}
