import { allCourses } from "@contentlayer/generated"
import { cache, FC } from "react"
import { SectionPath } from "./SectionPath"
import { fetchUserCompletedLessonByUnitId } from "@/lib/supabase/api/fetchUserFinishedLessons"

const getSortedSections = cache((course: string) => {
  const courseData = allCourses.find((c) => c.slugAsParams === course)
  const sortedSectionRefs = courseData?.sectionRefs.sort((a, b) => a.id - b.id)
  if (!sortedSectionRefs) return []
  const sortedSectionRefs2 = sortedSectionRefs?.map((a) => ({ ...a, id: sortedSectionRefs.length + a.id }))
  const sortedSectionRefs3 = sortedSectionRefs?.map((a) => ({ ...a, id: 2 * sortedSectionRefs.length + a.id }))
  const sortedSectionRefs4 = sortedSectionRefs?.map((a) => ({ ...a, id: 3 * sortedSectionRefs.length + a.id }))
  if (!sortedSectionRefs) return []

  return [...sortedSectionRefs, ...sortedSectionRefs2, ...sortedSectionRefs3, ...sortedSectionRefs4]
})

type PageProps = {
  course: string
}

export const PathPage: FC<PageProps> = async ({ course }) => {
  const sortedSectionRefs = getSortedSections(course)
  const completedLessons = await fetchUserCompletedLessonByUnitId()

  return (
    <div className="flex w-full flex-col items-center gap-2 sm:w-4/6">
      {sortedSectionRefs?.map((sectionRef) => (
        <SectionPath
          key={sectionRef.id}
          sectionRef={sectionRef}
          courseId={course}
          completedLessons={completedLessons}
        />
      ))}
    </div>
  )
}
