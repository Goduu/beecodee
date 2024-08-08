"use client"
import { useCallback} from 'react'
import { useActivityContext } from './ActivityContext'
import { redirect } from 'next/navigation'
import { useUnitStore } from '../Unit/unitStore'

export const useActivityStates = () => {
    const { currentActivity, goToNextActivity } = useActivityContext()
    const { currentUnit, goToNextLesson } = useUnitStore()

    const handleFinishLesson = useCallback(() => {
        goToNextLesson(currentUnit.slugAsParams)
        redirect('/')
    }, [goToNextLesson, currentUnit])


    const handleGoToNextActivity = useCallback(() => {
        goToNextActivity()
    }, [goToNextActivity])

    return {
        currentActivity,
        handleGoToNextActivity,
        handleFinishLesson,
    }
}
