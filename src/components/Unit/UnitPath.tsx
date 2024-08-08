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

  if (concluded) {
    return (
      <div className="flex justify-center star-div w-72 h-72 items-center " >
        <div className='
                border-b-8 border-green-600
                rounded-full flex justify-center 
                cursor-pointer hover:scale-105 hover:border-b-2 duration-300
                bg-green-500 w-32 h-32'
        >
          <LuCheckCircle className='w-16' />
        </div>
      </div>
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
