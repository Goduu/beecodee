"use client"
import { Lesson, Unit } from '@contentlayer/generated'
import React, { FC, useEffect } from 'react'
import { CircularProgress } from '../Activity/CircularProgress'
import { ActivityPath } from '../Activity/ActivityPath'
import { initializeUnit, unitStore } from './unitStore'
import { ReviewUnit } from './ReviewUnit'
import { useStore } from './useStore'

type UnitProps = {
  unit: Unit
  lessons: Lesson[]
}

export const UnitPath: FC<UnitProps> = ({ unit, lessons }) => {
  const currentUnit = useStore(unitStore, (state) => state.units[unit.slugAsParams])
  const currentLessonIndex = currentUnit?.currentLessonIndex || 0
  const currentLesson = lessons[currentLessonIndex]

  useEffect(() => {
    initializeUnit(unit.slugAsParams, lessons);
  }, [unit, lessons, initializeUnit]);

  initializeUnit(unit.slugAsParams, lessons)

  const percentage = (currentLessonIndex / unit.lessons.length) * 100

  if (currentUnit?.concluded) {
    return <ReviewUnit unit={unit} />
  }

  return (
    <CircularProgress percent={percentage} >
      <ActivityPath lesson={currentLesson} unit={unit} />
    </CircularProgress>
  )
}
