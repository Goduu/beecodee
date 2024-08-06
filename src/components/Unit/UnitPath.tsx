"use client"
import { Lesson, Unit } from '@contentlayer/generated'
import React, { FC } from 'react'
import { CircularProgress } from '../Activity/CircularProgress'
import { useUnitStore } from './unitStore'
import { ActivityPath } from '../Activity/ActivityPath'
import { LuCheckCircle } from '../Icons'

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

  if (!currentLesson && concluded) {
    return <CircularProgress percent={percentage}>
      <div className='
                star-div
                rounded-full flex items-center justify-center 
                cursor-pointer hover:scale-105 duration-300
                bg-green-500 w-24 h-24'
      >
        <LuCheckCircle className='w-10' />
      </div>
    </CircularProgress>
  }
  if (!currentLesson) {
    return null
  }

  return (
    <CircularProgress percent={percentage} >
      <ActivityPath lesson={currentLesson} />
    </CircularProgress>
  )
}
