"use client"
import React, { FC, useRef, useState } from 'react'
import { IoMdFlower } from '../Icons'
import { Tooltip } from './Tooltip'
import { Button } from '../Button'
import { Lesson, Unit } from '@contentlayer/generated'
import { redirect } from 'next/navigation'
import { useDetectOuterClick } from '../useDetectOuterClick'
import { resetLessonProgress, setCurrentUnitId } from '../Unit/unitStore'

type ActivityLinkProps = {
    lesson: Lesson
    unit: Unit
}
export const ActivityPath: FC<ActivityLinkProps> = ({ lesson, unit }) => {
    const [tooltipVisible, setTooltipVisible] = useState(false)
    const clickOutSideRef = useRef<HTMLDivElement>(null)
    useDetectOuterClick({ ref: clickOutSideRef, onOuterClick: () => setTooltipVisible(false) })

    return (
        <Tooltip content={<ActivityTooltipContent lesson={lesson} unit={unit} />} visible={tooltipVisible}>
            <div
                ref={clickOutSideRef}
                className='
                border-b-8 border-gray-900
                rounded-full flex items-center justify-center 
                cursor-pointer hover:scale-105 hover:border-b-2 duration-300
                bg-gray-800 w-24 h-24'
                onClick={() => setTooltipVisible(!tooltipVisible)}>
                <IoMdFlower className='w-16' />
            </div>
        </Tooltip>
    )
}

const ActivityTooltipContent: FC<ActivityLinkProps> = ({ lesson, unit }) => {

    const handleStartLesson = () => {
        setCurrentUnitId(unit)
        resetLessonProgress(unit)
        redirect(lesson.slug)
    }

    return (
        <div className='flex flex-col items-center gap-4'>
            {lesson.description}
            <Button onClick={handleStartLesson}>
                Start Lesson
            </Button>
        </div>
    )
}

