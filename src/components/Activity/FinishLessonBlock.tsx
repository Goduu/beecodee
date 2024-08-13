"use client"
import React, { FC } from 'react'
import { LuCheckCircle } from '../Icons'
import { Button } from '../Button'
import { redirect } from 'next/navigation'

type FinishLessonBlockProps = {
    finishLesson: () => void
}

export const FinishLessonBlock: FC<FinishLessonBlockProps> = ({ finishLesson }) => {

    const handleFinishLesson = () => {
        finishLesson()
        redirect('/path')
    }

    return (
        <div className='flex flex-col gap-12'>
            <LuCheckCircle className='w-32 text-white rounded-full bg-green-500 p-5' />
            <Button onClick={handleFinishLesson}>Finish Lesson</Button>
        </div>
    )
}
