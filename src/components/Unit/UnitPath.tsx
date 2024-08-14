"use client"
import { allUnits, Lesson, Unit } from '@contentlayer/generated'
import React, { FC, useEffect } from 'react'
import { CircularProgress } from '../Activity/CircularProgress'
import { ActivityPath } from '../Activity/ActivityPath'
import { initializeUnit, unitStore } from './unitStore'
import { ReviewUnit } from './ReviewUnit'
import { useStore } from '../useStore'
import { getPathZigzagPath } from './getPathDescription'

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
  }, [unit, lessons, initializeUnit, completedLessons]);

  initializeUnit(unit.slugAsParams, lessons, completedLessons)

  const percentage = (completedLessons.length / unit.lessonRefs.length) * 100

  if (percentage >= 100) {
    return (
      <div className={getPathZigzagPath(pathPosition)}>
        <ReviewUnit unit={unit} />
      </div >
    )
  }

  if (!currentLesson) return null

  return (
    <div className={getPathZigzagPath(pathPosition)}>
      <CircularProgress percent={percentage} >
        <ActivityPath lesson={currentLesson} unit={unit} />
      </CircularProgress>
    </div>
  )
}

