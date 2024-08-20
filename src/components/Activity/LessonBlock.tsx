"use client"
import React, { FC } from 'react'
import { unitStore } from '../Unit/unitStore'
import { useStore } from 'zustand'
import { Lesson } from '@contentlayer/generated'
import { ActivityBlock } from './ActivityBlock'
import { FinishLessonBlock } from './FinishLessonBlock'
import { saveFinishedLesson } from './ActivityBlock.functions'
import { redirect } from 'next/navigation'

type LessonBlockProps = {
    lesson: Lesson
}

export const LessonBlock: FC<LessonBlockProps> = ({ lesson }) => {
    const onGoingUnitSlug = useStore(unitStore, (state) => state.onGoingUnitSlug)
    const onGoingLessonSlug = useStore(unitStore, (state) => state.onGoingLessonSlug)
    const onGoingLessonToDoActivities = useStore(unitStore, (state) => state.onGoingLessonToDoActivities)

    const handleFinishLesson = () => {
        if (!onGoingLessonSlug) return

        saveFinishedLesson(onGoingUnitSlug, onGoingLessonSlug, lesson.xp)
        redirect('/path')
    }


    if (onGoingLessonToDoActivities?.size === 0) {
        return <FinishLessonBlock finishLesson={handleFinishLesson} />
    }


    return (
        <ActivityBlock />
    )
}