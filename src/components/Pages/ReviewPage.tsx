"use client"
import { Activity } from '@contentlayer/generated'
import { useSearchParams, } from 'next/navigation'
import React, { FC, useEffect } from 'react'
import { initiateReviewUnitVariables } from '../Unit/unitStore'
import { ReviewLesson } from '../ReviewLesson'

type ReviewPageProps = {
    activityMap: Map<string, Activity>
}

export const ReviewPage: FC<ReviewPageProps> = ({ activityMap }) => {
    const searchParams = useSearchParams()
    const activities = JSON.parse(searchParams.get("activities") || "")
    
    useEffect(() => {
        activities && initiateReviewUnitVariables(activities)
    }, [activities]);

    return (
        <ReviewLesson activityMap={activityMap} />
    )
}
