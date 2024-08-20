import { Activity } from '@contentlayer/generated'
import React, { FC, useEffect } from 'react'
import { FinishLessonBlock } from './Activity/FinishLessonBlock'
import { saveFinishedLesson } from './Activity/ActivityBlock.functions'
import { redirect } from 'next/navigation'
import { useStore } from './useStore'
import { goToNextActivity, unitStore } from './Unit/unitStore'
import { ActivitySwitcher } from './Activity/ActivitySwitcher'

const REVIEW_XP = 5

type ReviewLessonProps = {
    activityMap: Map<string, Activity>
}

export const ReviewLesson: FC<ReviewLessonProps> = ({ activityMap }) => {
    const [onGoingActivityData, setOnGoingActivityData] = React.useState<Activity | null>(null)
    const onGoingUnitSlug = useStore(unitStore, (state) => state.onGoingUnitSlug)
    const onGoingLessonSlug = useStore(unitStore, (state) => state.onGoingLessonSlug)
    const onGoingLessonToDoActivities = useStore(unitStore, (state) => state.onGoingLessonToDoActivities)
    const onGoingActivitySlug = useStore(unitStore, (state) => state.onGoingActivitySlug)

    useEffect(() => {
        if (!onGoingActivitySlug || !activityMap) return

        const activityData = activityMap.get(onGoingActivitySlug)

        activityData && setOnGoingActivityData(activityData)
    }, [activityMap, onGoingActivitySlug])

    const handleFinishLesson = () => {
        if (!onGoingLessonSlug) return

        saveFinishedLesson(onGoingUnitSlug, onGoingLessonSlug, REVIEW_XP)

        redirect('/path')
    }

    if (onGoingLessonToDoActivities?.size === 0) {
        return <FinishLessonBlock finishLesson={handleFinishLesson} />
    }

    if (!onGoingActivitySlug) return null


    if (!onGoingActivityData) return null

    return (
        <div className='flex flex-col gap-8'>
            <ActivitySwitcher activity={onGoingActivityData} goToNextActivity={goToNextActivity} />
        </div >
    )
}
