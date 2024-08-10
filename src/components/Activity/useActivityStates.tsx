"use client"
import { useCallback} from 'react'
import { useActivityContext } from './ActivityContext'
import { redirect } from 'next/navigation'
import { goToNextLesson, unitStore } from '../Unit/unitStore'
import { useStore } from '../useStore'

export const useActivityStates = () => {
    const { currentActivity, goToNextActivity } = useActivityContext()
    const currentUnitId = useStore(unitStore, (state) => state.currentUnitId)
    const currentUnit = useStore(unitStore, (state) => state.units[currentUnitId || ''])

    const handleFinishLesson = useCallback(() => {
        if(!currentUnit) return
        goToNextLesson()
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
