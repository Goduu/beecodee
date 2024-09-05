import { allSections, SectionReference } from "@contentlayer/generated"
import React, { cache, FC } from "react"
import { UnitPath } from "../Unit/UnitPath"
import { fetchUserCompletedLessonByUnitId } from "@/lib/supabase/api/fetchUserFinishedLessons"
import { getSectionPathIndexClass } from "./getSectionPathIndexClass"

const getSectionDataAndSortedUnitRefs = cache((section: string, courseId: string) => {
  const sectionData = allSections.find((t) => t.course === courseId && t.slugAsParams === section)
  if (!sectionData) return { sortedUnitRefs: [], sectionData }
  const sortedUnitRefs = sectionData?.unitRefs.sort((a, b) => a.id - b.id).map((unitRef) => unitRef)
  return { sortedUnitRefs: sortedUnitRefs, sectionData }
})

type SectionPathProps = {
  sectionRef: SectionReference
  courseId: string
}

export const SectionPath: FC<SectionPathProps> = async ({ sectionRef, courseId }) => {
  const { sortedUnitRefs, sectionData } = getSectionDataAndSortedUnitRefs(sectionRef.section, courseId)
  const completedLessons = await fetchUserCompletedLessonByUnitId()
  const sectionClass = getSectionPathIndexClass(sectionRef.id)

  return (
    <div className="flex w-full flex-col items-center overflow-visible">
      <div className={`sticky top-14 z-20 mb-4 w-full rounded-3xl border-b-4 p-6 text-white ${sectionClass}`}>
        <div className="text-md font-semibold uppercase">{sectionData?.label["en"]}</div>
        <div className="text-2xl font-bold sm:text-xl">{sectionData?.description["en"]}</div>
      </div>
      {sortedUnitRefs?.map((unitRef) => (
        <UnitPath
          key={unitRef.id}
          sectionPathIndex={sectionRef.id}
          unitRef={unitRef}
          completedUnitLessons={completedLessons?.get(unitRef.unit)}
        />
      ))}
    </div>
  )
}
