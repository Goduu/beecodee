"use client"
import { Lesson, Unit } from '@contentlayer/generated'
import React, { FC } from 'react'
import { CircularProgress } from '../Activity/CircularProgress'
import { selectLessonByUnitSlug, useUnitStore } from './unitStore'

type UnitProps = {
  unit: Unit
  lessons: Lesson[]
}

export const UnitPath: FC<UnitProps> = ({ unit, lessons }) => {
  const unitStore = useUnitStore(selectLessonByUnitSlug(unit));

  if (!unitStore) return null

  const { currentLessonIndex, lastLessonIndex, concluded } = unitStore

  const currentLessonSlug = unit.lessons[currentLessonIndex]
  const currentLesson = lessons.find((lesson) => lesson.slugAsParams === currentLessonSlug)
  const percentage = (currentLessonIndex / unit.lessons.length) * 100

  if (!currentLesson) return null

  return (
    <CircularProgress percent={percentage} lesson={currentLesson} />
  )
}
