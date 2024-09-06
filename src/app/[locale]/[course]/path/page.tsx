import { PathPage } from "@/components/Pages/PathPage"
import { capitalize } from "lodash"
import { Metadata } from "next"

type PageProps = {
  params: {
    course: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const course = params.course
  return {
    title: `Beecodee: ${capitalize(course)}`,
    keywords: ["path", "page", "beecodee", "course", "learning", course],
  }
}

export default async function Path({ params }: PageProps) {
  return <PathPage course={params.course} />
}
