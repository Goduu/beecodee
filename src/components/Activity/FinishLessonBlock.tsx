"use client"
import React, { FC, useState } from 'react'
import { ImSpinner, LuCheckCircle } from '../Svgs/Icons'
import { Button } from '../Button'

type FinishLessonBlockProps = {
    finishLesson: () => Promise<void>
}

export const FinishLessonBlock: FC<FinishLessonBlockProps> = ({ finishLesson }) => {
    const [finishing, setFinishing] = useState(false)

    const handleFinishLesson = async () => {
        setFinishing(true)
        await finishLesson()
        setFinishing(false)
    }

    return (
        <>
            <LuCheckCircle className='w-32 text-white rounded-full bg-green-500 p-5' />
            <Button onClick={handleFinishLesson}>
                <span className='flex gap-1'>
                    {finishing ? <ImSpinner className="h-12 w-12 animate-spin" />
                    : "Finish Lesson"
                }
                </span>
            </Button>
        </>
    )
}
