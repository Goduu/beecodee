"use client"
import { Lesson, Unit } from '@contentlayer/generated'
import React, { FC } from 'react'
import { CircularProgress } from '../Activity/CircularProgress'
import { useUnitStore } from './unitStore'
import { ActivityPath } from '../Activity/ActivityPath'
import { ReviewUnit } from './ReviewUnit'

type UnitProps = {
  unit: Unit
  lessons: Lesson[]
}

export const UnitPath: FC<UnitProps> = ({ unit, lessons }) => {
  const { selectLessonByUnitSlug } = useUnitStore();
  const { currentLessonIndex, concluded } = selectLessonByUnitSlug(unit)

  const currentLessonSlug = unit.lessons[currentLessonIndex]
  const currentLesson = lessons.find((lesson) => lesson.slugAsParams === currentLessonSlug)
  const percentage = (currentLessonIndex / unit.lessons.length) * 100

  if (concluded) {
    return (
      <ReviewUnit unit={unit}/> 
    )
  }

  if (!currentLesson) {
    return null
  }

  return (
    <CircularProgress percent={percentage} >
      <ActivityPath lesson={currentLesson} unit={unit} />
    </CircularProgress>
  )
}
