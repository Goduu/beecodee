"use client"
import React, { FC, useRef, useState } from 'react'
import { Pollen } from '../Icons'
import { TooltipClick } from '../TooltipClick'
import { Button } from '../Button'
import { Lesson, Unit } from '@contentlayer/generated'
import { redirect } from 'next/navigation'
import { useDetectOuterClickAndEsc } from '../useDetectOuterClickAndEsc'
import { resetLessonProgress, setCurrentUnitId } from '../Unit/unitStore'
import { UnitBookButton } from './UnitBookButton'
import { UnitBookModal } from './UnitBookModal'
import { PathwayButton } from './PathwayButton'

type ActivityLinkProps = {
    lesson: Lesson
    unit: Unit
}
export const ActivityPath: FC<ActivityLinkProps> = ({ lesson, unit }) => {
    const [tooltipVisible, setTooltipVisible] = useState(false)
    const clickOutSideRef = useRef<HTMLDivElement>(null)
    useDetectOuterClickAndEsc({ ref: clickOutSideRef, onOuterClick: () => setTooltipVisible(false) })

    return (
        <div ref={clickOutSideRef}>
            <TooltipClick content={<ActivityTooltipContent lesson={lesson} unit={unit} />} visible={tooltipVisible}>
                <PathwayButton size="large" onClick={() => setTooltipVisible(!tooltipVisible)} />
            </TooltipClick>
        </div>
    )
}

const ActivityTooltipContent: FC<ActivityLinkProps> = ({ lesson, unit }) => {

    const handleStartLesson = () => {
        setCurrentUnitId(unit)
        resetLessonProgress(unit)
        redirect(lesson.slug)
    }

    return (
        <div className='relative gap-2'>
            <div className='flex flex-col items-center gap-5 text-center'>
                <div className='text-lg'>
                    {lesson.description}
                </div>
                <div className='flex gap-2 items-center text-sm'>
                    <Pollen className='w-7' /> Get {lesson.xp} XPollen
                </div>
                <div className='absolute bottom-0 right-0'>
                    <UnitBookButton unit={unit} />
                </div>
                <Button onClick={handleStartLesson}>
                    Start Lesson
                </Button>
            </div>
        </div>
    )
}

