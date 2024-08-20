"use client"
import { allLessons, Unit } from '@contentlayer/generated'
import React, { FC, useEffect } from 'react'
import { CircularProgress } from '../Activity/CircularProgress'
import { ActivityPath } from '../Activity/ActivityPath'
import { initiateCompletedUnitLessons, unitStore } from './unitStore'
import { ReviewUnit } from './ReviewUnit'
import { useStore } from '../useStore'
import { getPathZigzagPath } from './getPathZigzagPath'
import { CircleSkeleton } from '../Skeletons/CircleSkeleton'

type UnitProps = {
  unit: Unit
  pathPosition: number
  completedLessons: Set<string> | undefined
}

export const UnitPath: FC<UnitProps> = ({ unit, pathPosition, completedLessons }) => {
  const nextLesson = useUnitNextLesson(unit)

  useEffect(() => {
    completedLessons && initiateCompletedUnitLessons(completedLessons)
  }, [completedLessons])

  const percentage = ((completedLessons?.size || 0) / unit.lessonRefs.length) * 100

  const zigZagClass = getPathZigzagPath(pathPosition)

  if (percentage >= 100) {
    return (
      <div className={zigZagClass}>
        <ReviewUnit unit={unit} />
      </div >
    )
  }

  if (!nextLesson) return <CircleSkeleton className={zigZagClass} />

  return (
    <div className={zigZagClass}>
      <CircularProgress percent={percentage} >
        <ActivityPath lesson={nextLesson} unit={unit} />
      </CircularProgress>
    </div>
  )
}



const useUnitNextLesson = (unit: Unit) => {
  const completedLessons = useStore(unitStore, state => state.completedLessons)
  if (!completedLessons) return

  const unitLessonSlugs = unit.lessonRefs.map(l => l.lesson)
  // @ToDo improve this logic
  const unitUncompletedLessons = allLessons
    .filter((lesson) => unitLessonSlugs.includes(lesson.slugAsParams) && !completedLessons.has(lesson.slugAsParams))
    .sort((a, b) => unit.lessonRefs.find(l => l.lesson === a.slugAsParams)!.id - unit.lessonRefs.find(l => l.lesson === b.slugAsParams)!.id)
  const nextLesson = unitUncompletedLessons[0]
  return nextLesson
}