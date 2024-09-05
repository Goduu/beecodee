import { allCourses } from "@contentlayer/generated"
import { FlyingBee } from "../Svgs/Animations/FlyingBee"
import { cache, FC } from "react"
import { SectionPath } from "./SectionPath"

const getSortedSections = cache((course: string) => {
  const courseData = allCourses.find((c) => c.slugAsParams === course)
  const sortedSectionRefs = courseData?.sectionRefs.sort((a, b) => a.id - b.id)
  if (!sortedSectionRefs) return []

  return sortedSectionRefs
})

type PageProps = {
  course: string
}

export const PathPage: FC<PageProps> = async ({ course }) => {
  const sortedSectionRefs = getSortedSections(course)

  return (
    <div className="flex w-4/6 flex-col items-center gap-2">
      <FlyingBee className="w-44" />
      {sortedSectionRefs?.map((sectionRef) => (
        <SectionPath key={sectionRef.id} sectionRef={sectionRef} courseId={course} />
      ))}
    </div>
  )
}
