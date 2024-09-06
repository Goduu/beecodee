import { allSections, SectionReference } from "@contentlayer/generated"
import React, { cache, FC } from "react"
import { UnitPath } from "../Unit/UnitPath"
import { CompletedLessonIdsByUnitId } from "@/lib/supabase/api/fetchUserFinishedLessons"
import { getSectionPathIndexClass } from "./getSectionPathIndexClass"

const getSectionDataAndSortedUnitRefs = cache((section: string, courseId: string) => {
  const sectionData = allSections.find((t) => t.course === courseId && t.slugAsParams === section)
  if (!sectionData) return { sortedUnitRefs: [], sectionData }
  const sortedUnitRefs = sectionData?.unitRefs.sort((a, b) => a.id - b.id).map((unitRef) => unitRef)
  const sortedUnitRefs2 = sortedUnitRefs?.map((a) => ({ ...a, id: sortedUnitRefs.length + a.id }))
  const sortedUnitRefs3 = sortedUnitRefs?.map((a) => ({ ...a, id: 2 * sortedUnitRefs.length + a.id }))
  return { sortedUnitRefs: [...sortedUnitRefs, ...sortedUnitRefs2, ...sortedUnitRefs3], sectionData }
})

type SectionPathProps = {
  sectionRef: SectionReference
  courseId: string
  completedLessons: CompletedLessonIdsByUnitId | undefined
}

export const SectionPath: FC<SectionPathProps> = async ({ sectionRef, courseId, completedLessons }) => {
  const { sortedUnitRefs, sectionData } = getSectionDataAndSortedUnitRefs(sectionRef.section, courseId)
  const sectionClass = getSectionPathIndexClass(sectionRef.id)

  return (
    <div className="flex w-full flex-col items-center overflow-visible">
      <div className={`sticky top-14 z-20 mb-4 w-full rounded-xl border-b-4 p-4 sm:p-6  ${sectionClass}`}>
        <div className="text-md font-semibold uppercase text-slate-50 text-opacity-60">{sectionData?.label["en"]}</div>
        <div className="text-lg font-bold leading-tight text-white sm:text-xl">{sectionData?.description["en"]}</div>
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
