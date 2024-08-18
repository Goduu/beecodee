"use client"
import { goToNextActivity, unitStore } from '@/components/Unit/unitStore'
import { useStore } from '@/components/useStore'
import React, { FC } from 'react'
import { allActivities } from '@contentlayer/generated'
import { ActivitySwitcher } from './ActivitySwitcher'

type AnswerBlockProps = {
}

export const ActivityBlock: FC<AnswerBlockProps> = () => {
    const onGoingActivitySlug = useStore(unitStore, (state) => state.onGoingActivitySlug)
    // @ToDo implement a map for allActivities to avoid this find
    const onGoingActivityData = allActivities.find((activity) => activity.slugAsParams === onGoingActivitySlug)

    if (!onGoingActivityData) return null


    return (
        <div className='flex flex-col gap-8'>
            <ActivitySwitcher activity={onGoingActivityData} goToNextActivity={goToNextActivity}/>
        </div >
    )
}
