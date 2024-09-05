import { notFound } from "next/navigation"

import { Metadata } from "next"
import { Activity, allActivities, allLessons } from "@contentlayer/generated"
import { Quiz } from "@/components/Activity/Quiz"
import { QuizContextWrapper } from "@/components/Activity/Quiz.context"
import { cache } from "react"

interface ActivityProps {
  params: {
    slug: string
  }
}

const getLessonFromLessonSlug = cache(async (lessonSlug: ActivityProps["params"]["slug"]) => {
  const lesson = allLessons.find((lesson) => lesson.slugAsParams === lessonSlug)

  if (!lesson) {
    null
  }

  return lesson
})

export async function generateMetadata({ params }: ActivityProps): Promise<Metadata> {
  const lesson = await getLessonFromLessonSlug(params.slug)

  if (!lesson) {
    return {}
  }

  return {
    title: `Beecodee: ${lesson.description}`,
  }
}

export default async function Page({ params }: ActivityProps) {
  const lesson = await getLessonFromLessonSlug(params.slug)
  if (!lesson) {
    notFound()
  }
  const activityMap = new Map<string, Activity>()

  allActivities.forEach((activity) => {
    activityMap.set(activity.slugAsParams, activity)
  })

  return (
    <QuizContextWrapper>
      <Quiz activityMap={activityMap} lessonXp={lesson.xp} />
    </QuizContextWrapper>
  )
}
