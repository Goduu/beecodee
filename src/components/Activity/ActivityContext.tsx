"use client"
import { Activity } from '@contentlayer/generated'
import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react'

type ActivityContextProps = {
    activities: Activity[] | undefined
    currentActivityIndex: number
    currentActivity: Activity | null | undefined
    goToNextActivity: () => void
}

type ActivityContextWrapperProps = {
    children: ReactNode,
    activities: Activity[]
}

const ActivityContext = createContext<ActivityContextProps>({
    activities: [],
    currentActivityIndex: 0,
    currentActivity: null,
    goToNextActivity: () => { }
})

export const ActivityContextWrapper: FC<ActivityContextWrapperProps> = ({ children, activities = [] }) => {
    const [currentActivityIndex, setCurrentActivityIndex] = useState(0)
    const [currentActivity, setCurrentActivity] = useState<Activity | null | undefined>()

    useEffect(() => {
        if (!activities.length) return

        setCurrentActivity(activities[currentActivityIndex])

    }, [currentActivityIndex, activities])

    const goToNextActivity = () => {
        setCurrentActivityIndex(prevActivity => prevActivity + 1)
    }

    return (
        <ActivityContext.Provider value={{ activities, currentActivityIndex, currentActivity, goToNextActivity }} >
            {children}
        </ActivityContext.Provider>
    )
}

export function useActivityContext() {
    return useContext(ActivityContext);
}