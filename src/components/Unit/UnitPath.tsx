"use client"
import { Lesson, Unit } from '@contentlayer/generated'
import React, { FC, useEffect } from 'react'
import { CircularProgress } from '../Activity/CircularProgress'
import { ActivityPath } from '../Activity/ActivityPath'
import { initializeUnit, unitStore } from './unitStore'
import { ReviewUnit } from './ReviewUnit'
import { useStore } from '../useStore'

type UnitProps = {
  unit: Unit
  lessons: Lesson[]
  pathPosition: number
  completedLessons: string[]
}

export const UnitPath: FC<UnitProps> = ({ unit, lessons, pathPosition, completedLessons }) => {
  const currentUnit = useStore(unitStore, (state) => state.units[unit.slugAsParams])
  const concludedLessons = lessons.filter(lesson => completedLessons.includes(lesson.slugAsParams))
  const currentLessonIndex = currentUnit?.currentLessonIndex || 0
  const currentLesson = lessons[currentLessonIndex]

  useEffect(() => {
    initializeUnit(unit.slugAsParams, lessons, completedLessons);
  }, [unit, lessons, initializeUnit, completedLessons]);

  initializeUnit(unit.slugAsParams, lessons, completedLessons)

  const percentage = (concludedLessons.length / unit.lessons.length) * 100

  if (!currentLesson) return null

  if (currentUnit?.concluded) {
    return (
      <div className={getPathDescription(pathPosition)}>
        <ReviewUnit unit={unit} />
      </div >
    )
  }

  return (
    <div className={getPathDescription(pathPosition)}>
      <CircularProgress percent={percentage} >
        <ActivityPath lesson={currentLesson} unit={unit} />
      </CircularProgress>
    </div>
  )
}


function getPathDescription(pathIndex: number): string {
  switch (pathIndex % 8) {
    case 0:
      return "";
    case 7:
      return "-mr-24 sm:-mr-48 ";
    case 6:
      return "-mr-36 sm:-mr-96 ";
    case 5:
      return "-mr-24 sm:-mr-48 ";
    case 4:
      return "";
    case 3:
      return "mr-24 sm:mr-48 ";
    case 2:
      return "mr-36 sm:mr-96 ";
    case 1:
      return "mr-24 sm:mr-48 ";
    default:
      return "";
  }
}