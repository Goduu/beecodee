"use client"
import { allLessons, Unit, UnitContent } from "@contentlayer/generated"
import React, { FC, useEffect } from "react"
import { CircularProgress } from "../Activity/CircularProgress"
import { ActivityPath } from "../Activity/ActivityPath"
import { initiateCompletedUnitLessons, unitStore } from "./unitStore"
import { ReviewUnit } from "./ReviewUnit"
import { useStore } from "../useStore"
import { getPathZigzagClass } from "./getPathZigzagClass"
import { CircleSkeleton } from "../Skeletons/CircleSkeleton"
import { StartBallon } from "../Activity/StartBallon"

type UnitProps = {
  unit: Unit
  unitContent: UnitContent | undefined
  pathPosition: number
  completedLessons: Set<string> | undefined
  isFirstUncompletedUnit: boolean
}

export const UnitPath: FC<UnitProps> = ({
  unit,
  pathPosition,
  completedLessons,
  unitContent,
  isFirstUncompletedUnit,
}) => {
  const nextLesson = useUnitNextLesson(unit)

  useEffect(() => {
    completedLessons && initiateCompletedUnitLessons(completedLessons)
  }, [completedLessons])

  const percentage = ((completedLessons?.size || 0) / unit.lessonRefs.length) * 100
  const zigZagClass = getPathZigzagClass(pathPosition)

  if (percentage >= 100) {
    return (
      <div className={zigZagClass}>
        <ReviewUnit unit={unit} />
      </div>
    )
  }

  if (!nextLesson) return <CircleSkeleton className={zigZagClass} />

  return (
    <div className={zigZagClass}>
      <CircularProgress percent={percentage}>
        {isFirstUncompletedUnit && <StartBallon />}
        <ActivityPath lesson={nextLesson} unit={unit} unitContent={unitContent} />
      </CircularProgress>
    </div>
  )
}

const useUnitNextLesson = (unit: Unit) => {
  const completedLessons = useStore(unitStore, (state) => state.completedLessons)
  if (!completedLessons) return

  const unitLessonSlugs = unit.lessonRefs.map((l) => l.lesson)
  // @ToDo improve this logic
  const unitUncompletedLessons = allLessons
    .filter((lesson) => unitLessonSlugs.includes(lesson.slugAsParams) && !completedLessons.has(lesson.slugAsParams))
    .sort(
      (a, b) =>
        unit.lessonRefs.find((l) => l.lesson === a.slugAsParams)!.id -
        unit.lessonRefs.find((l) => l.lesson === b.slugAsParams)!.id,
    )
  const nextLesson = unitUncompletedLessons[0]
  return nextLesson
}
