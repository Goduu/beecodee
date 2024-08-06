import { notFound } from "next/navigation"

import { Metadata } from "next"
import { allActivities, allLessons } from "@contentlayer/generated"
import { ActivityBlock } from "@/components/Activity/Activity"

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
  const post = await getLessonFromParams(params)

  if (!post) {
    return {}
  }

  return {
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<ActivityProps["params"][]> {
  return allLessons.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: ActivityProps) {
  const post = await getLessonFromParams(params)
  if (!post) {
    notFound()
  }

  return (
    <div className="text-center">
      <div className="justify-center items-center w-full flex flex-col gap-8 h-96">
        {post.description && (
          <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
            {post.description}
          </p>
        )}
        <ActivityBlock />
      </div>
    </div>
  )
}
