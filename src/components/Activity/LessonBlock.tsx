"use client"
import React, { FC, useCallback } from 'react'
import { unitStore } from '../Unit/unitStore'
import { useStore } from 'zustand'
import { Lesson } from '@contentlayer/generated'
import { ActivityBlock } from './ActivityBlock'
import { FinishLessonBlock } from './FinishLessonBlock'
import { handleFinishLesson } from './ActivityBlock.functions'

type LessonBlockProps = {
    lesson: Lesson
}

export const LessonBlock: FC<LessonBlockProps> = ({ lesson }) => {
    const currentUnitId = useStore(unitStore, (state) => state.currentUnitId)
    const unit = useStore(unitStore, (state) => state.units[currentUnitId || ''])
    const currentLessonIndex = unit?.currentLessonIndex || 0
    const currentLesson = unit?.lessons[currentLessonIndex]

    const finishLesson = useCallback(() => {
        return handleFinishLesson(currentUnitId, lesson.slugAsParams, lesson.xp)
    }, [currentUnitId, lesson.slugAsParams, lesson.xp])

    if (!currentUnitId) return null



    if (currentLesson?.concluded) {
        return <FinishLessonBlock finishLesson={finishLesson} />
    }


    return (
        <ActivityBlock />
    )
}