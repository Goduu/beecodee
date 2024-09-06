import { allUnitContents, allUnits, UnitReference } from "@contentlayer/generated"
import React, { cache, FC, memo } from "react"
import { CircularProgress } from "../Activity/CircularProgress"
import { ActivityPath } from "../Activity/ActivityPath"
import { ReviewUnit } from "./ReviewUnit"
import { getPathZigzagClass } from "./getPathZigzagClass"
import { CircleSkeleton } from "../Skeletons/CircleSkeleton"
import { getLessonDataByLessonId } from "../Pages/getLessonDataByLessonId"
import { getSectionPathIndexClass } from "../Pages/getSectionPathIndexClass"
import { getUnitCompanion } from "./getUnitCompanion"

const getSortedLessonsAndUnitData = cache((unit: string) => {
  const unitData = allUnits.find((u) => u.slugAsParams === unit)
  const sortedLessons = unitData?.lessonRefs.sort((a, b) => a.id - b.id).map((lessonRef) => lessonRef.lesson)

  return { sortedLessons, unitData }
})

type UnitPathProps = {
  unitRef: UnitReference
  completedUnitLessons: Set<string> | undefined
  sectionPathIndex: number
}

export const UnitPath: FC<UnitPathProps> = memo(async ({ unitRef, completedUnitLessons, sectionPathIndex }) => {
  const { sortedLessons, unitData } = await getSortedLessonsAndUnitData(unitRef.unit)
  const percentageConcluded = ((completedUnitLessons?.size || 0) / (sortedLessons?.length || 1)) * 100
  const zigZagClass = getPathZigzagClass(unitRef.id || 0)
  const lessonDataByLessonId = await getLessonDataByLessonId()
  const unitContent = unitData ? allUnitContents.find((u) => u.unit === unitRef.unit) : undefined
  const sectionClass = getSectionPathIndexClass(sectionPathIndex)

  if (!unitData) return null

  const nextLessonSlug = unitData.lessonRefs.find((l) => !completedUnitLessons?.has(l.lesson))
  const nextLesson = lessonDataByLessonId?.get(nextLessonSlug?.lesson || "")

  if (percentageConcluded >= 100) {
    return (
      <div className="relative flex w-full items-center justify-center">
        {getUnitCompanion(unitRef.id, sectionPathIndex, "left")}
        <div className={zigZagClass}>
          <ReviewUnit unit={unitData} className={sectionClass} unitContent={unitContent} />
        </div>
        {getUnitCompanion(unitRef.id, sectionPathIndex, "right")}
      </div>
    )
  }

  if (!nextLesson) {
    return (
      <div className={`${zigZagClass} h-40`}>
        <CircleSkeleton size="medium" />
      </div>
    )
  }

  return (
    <div className="relative flex w-full items-center justify-center">
      {getUnitCompanion(unitRef.id, sectionPathIndex, "left")}
      <div className={zigZagClass}>
        <CircularProgress size="small" percent={percentageConcluded}>
          {/* {isFirstUncompletedUnit && <StartBallon />} */}
          <ActivityPath lesson={nextLesson} unit={unitData} unitContent={unitContent} className={sectionClass} />
        </CircularProgress>
      </div>
      {getUnitCompanion(unitRef.id, sectionPathIndex, "right")}
    </div>
  )
})
