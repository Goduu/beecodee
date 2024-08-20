"use client"
import React, { FC } from 'react'
import { LuCheckCircle } from '../Svgs/Icons'
import { Button } from '../Button'
import { redirect } from 'next/navigation'

type FinishLessonBlockProps = {
    finishLesson: () => void
}

export const FinishLessonBlock: FC<FinishLessonBlockProps> = ({ finishLesson }) => {

    return (
        <div className='flex flex-col gap-12'>
            <LuCheckCircle className='w-32 text-white rounded-full bg-green-500 p-5' />
            <Button onClick={finishLesson}>Finish Lesson</Button>
        </div>
    )
}
