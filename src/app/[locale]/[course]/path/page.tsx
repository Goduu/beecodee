import { PathPage } from "@/components/Pages/PathPage"
import { FC } from "react"

type PageProps = {
  params: {
    course: string
  }
}

export const Home: FC<PageProps> = async ({ params }) => {
  return <PathPage course={params.course} />
}

export default Home