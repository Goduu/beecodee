"use client"
import React, { FC, useRef, useState } from 'react'
import { IoMdFlower } from '../Icons'
import { Tooltip } from './Tooltip'
import { Button } from '../Button'
import { useEffect } from 'react'
import { Lesson, Unit } from '@contentlayer/generated'
import { redirect } from 'next/navigation'
import { useUnitStore } from '../Unit/unitStore'

type ActivityLinkProps = {
    lesson: Lesson
    unit: Unit
}
export const ActivityPath: FC<ActivityLinkProps> = ({ lesson, unit }) => {
    const [tooltipVisible, setTooltipVisible] = useState(false)
    const clickOutSideRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (target && clickOutSideRef?.current && !clickOutSideRef.current.contains(target)) {
                setTooltipVisible(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <Tooltip content={<ActivityTooltipContent lesson={lesson} unit={unit} />} visible={tooltipVisible}>
            <div
                ref={clickOutSideRef}
                className='
                star-div
                border-b-8 border-gray-900
                rounded-full flex items-center justify-center 
                cursor-pointer hover:scale-105 duration-300 hover:border-b-2
                bg-gray-800 w-24 h-24'
                onClick={() => setTooltipVisible(!tooltipVisible)}>
                <IoMdFlower className='w-16' />
            </div>
        </Tooltip>
    )
}

const ActivityTooltipContent: FC<ActivityLinkProps> = ({ lesson, unit }) => {
    const { setCurrentUnit } = useUnitStore();

    const handleStartLesson = () => {
        setCurrentUnit(unit)
        redirect(lesson.slug)
    }

    return (
        <div className='star-div flex flex-col items-center gap-4'>
            {lesson.description}
            <Button onClick={handleStartLesson}>
                Start Lesson
            </Button>
        </div>
    )
}

