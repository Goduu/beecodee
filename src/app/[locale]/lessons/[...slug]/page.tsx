import { notFound } from "next/navigation"

import { Metadata } from "next"
import { Activity, allActivities, allLessons } from "@contentlayer/generated"
import { Quiz } from "@/components/Activity/Quiz"
import { QuizContextWrapper } from "@/components/Activity/Quiz.context"

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
    <QuizContextWrapper>
      <Quiz activityMap={activityMap} lessonXp={lesson.xp} />
    </QuizContextWrapper>
  )
}
