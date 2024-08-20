"use client"
import React, { FC, useEffect, useState } from 'react'
import { goToNextActivity, unitStore } from '../Unit/unitStore'
import { useStore } from 'zustand'
import { Activity } from '@contentlayer/generated'
import { FinishLessonBlock } from './FinishLessonBlock'
import { saveFinishedLesson } from './ActivityBlock.functions'
import { ActivitySwitcher } from './ActivitySwitcher'
import { EndLessonXpPage } from '../XPollen/EndLessonXpPage'

type LessonBlockProps = {
    lessonXp: number
    activityMap: Map<string, Activity>
}

export const LessonBlock: FC<LessonBlockProps> = ({ lessonXp, activityMap }) => {
    const [onGoingActivityData, setOnGoingActivityData] = useState<Activity | null>(null)
    const [lessonState, setLessonState] = useState<'doing' | 'finished' | 'result'>('doing')

    const onGoingUnitSlug = useStore(unitStore, (state) => state.onGoingUnitSlug)
    const onGoingLessonSlug = useStore(unitStore, (state) => state.onGoingLessonSlug)
    const onGoingLessonToDoActivities = useStore(unitStore, (state) => state.onGoingLessonToDoActivities)
    const onGoingActivitySlug = useStore(unitStore, (state) => state.onGoingActivitySlug)

    useEffect(() => {
        if (!onGoingActivitySlug || !activityMap) return

        const activityData = activityMap.get(onGoingActivitySlug)

        activityData && setOnGoingActivityData(activityData)
    }, [activityMap, onGoingActivitySlug])

    const handleGotToNextActivity = () => {
        if (onGoingLessonToDoActivities?.size === 1) {
            setLessonState('finished')
        }
        goToNextActivity()
    }

    const handleFinishLesson = async () => {
        if (!onGoingLessonSlug) return
        await saveFinishedLesson(onGoingUnitSlug, onGoingLessonSlug, lessonXp)
        setLessonState('result')
    }

    if (lessonState === 'doing') {
        return (
            <div className={`flex-col gap-8 flex`}>
                <ActivitySwitcher activity={onGoingActivityData} goToNextActivity={handleGotToNextActivity} />
            </div >
        )
    }

    if (lessonState === 'finished') {
        return (
            <div className={`flex-col gap-8 flex`}>
                <FinishLessonBlock finishLesson={handleFinishLesson} />
            </div >
        )
    }


    return (
        <div className={`flex-col gap-8 flex`}>
            <EndLessonXpPage lessonXp={lessonXp} />
        </div>
    )
}