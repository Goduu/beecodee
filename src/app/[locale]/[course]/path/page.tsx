import { PathPage } from "@/components/Pages/PathPage"

type PageProps = {
  params: {
    course: string
  }
}

export default async function Path({ params }: PageProps) {
  return <PathPage course={params.course} />
}
