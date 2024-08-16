"use client"
import { allLessons, Unit } from '@contentlayer/generated'
import React, { FC, useEffect } from 'react'
import { CircularProgress } from '../Activity/CircularProgress'
import { ActivityPath } from '../Activity/ActivityPath'
import { initiateCompletedUnitLessons, startLesson, unitStore } from './unitStore'
import { ReviewUnit } from './ReviewUnit'
import { useStore } from '../useStore'
import { getPathZigzagPath } from './getPathDescription'
import { CircleSkeleton } from '../Skeletons/CircleSkeleton'

type UnitProps = {
  unit: Unit
  pathPosition: number
  completedLessons: Set<string> | undefined
}

export const UnitPath: FC<UnitProps> = ({ unit, pathPosition, completedLessons }) => {
  const onGoingLessonSlug = useStore(unitStore, (state) => state.onGoingLessonSlug)
  // @ToDo implement a map for allLessons to avoid this find
  const onGoingLesson = allLessons.find((lesson) => lesson.slugAsParams === onGoingLessonSlug)

  useEffect(() => {
    completedLessons && initiateCompletedUnitLessons(completedLessons)
  }, [completedLessons])

  useEffect(() => {
    startLesson(unit);
  }, [unit]);

  const percentage = ((completedLessons?.size || 0) / unit.lessonRefs.length) * 100

  const zigZagClass = getPathZigzagPath(pathPosition)

  if (percentage >= 100) {
    return (
      <div className={zigZagClass}>
        <ReviewUnit unit={unit} />
      </div >
    )
  }

  if (!onGoingLesson) return <CircleSkeleton className={zigZagClass} />

  return (
    <div className={zigZagClass}>
      <CircularProgress percent={percentage} >
        <ActivityPath lesson={onGoingLesson} unit={unit} />
      </CircularProgress>
    </div>
  )
}

