"use client"
import { Lesson, Unit } from '@contentlayer/generated'
import React, { FC, useEffect } from 'react'
import { CircularProgress } from '../Activity/CircularProgress'
import { ActivityPath } from '../Activity/ActivityPath'
import { initializeUnit, unitStore } from './unitStore'
import { ReviewUnit } from './ReviewUnit'
import { useStore } from '../useStore'
import { getPathZigzagPath } from './getPathDescription'
import { CircleSkeleton } from '../Skeletons/CircleSkeleton'

type UnitProps = {
  unit: Unit
  lessons: Lesson[]
  pathPosition: number
  completedLessons: string[]
}

export const UnitPath: FC<UnitProps> = ({ unit, lessons, pathPosition, completedLessons }) => {
  const currentUnit = useStore(unitStore, (state) => state.units[unit.slugAsParams])
  const currentLessonId = currentUnit?.currentLessonId
  const currentLesson = lessons.find((lesson) => lesson.slugAsParams === currentLessonId)

  useEffect(() => {
    initializeUnit(unit.slugAsParams, lessons, completedLessons);
  }, [unit, lessons, completedLessons]);

  initializeUnit(unit.slugAsParams, lessons, completedLessons)

  const percentage = (completedLessons.length / unit.lessonRefs.length) * 100

  const zigZagClass = getPathZigzagPath(pathPosition)

  if (percentage >= 100) {
    return (
      <div className={zigZagClass}>
        <ReviewUnit unit={unit} />
      </div >
    )
  }

  if (!currentLesson) return <CircleSkeleton className={zigZagClass} />

  return (
    <div className={zigZagClass}>
      <CircularProgress percent={percentage} >
        <ActivityPath lesson={currentLesson} unit={unit} />
      </CircularProgress>
    </div>
  )
}

