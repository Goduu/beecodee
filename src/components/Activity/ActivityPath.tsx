"use client"
import Link from 'next/link'
import React, { FC, useState } from 'react'
import { FaStar } from '../Icons'
import { Tooltip } from './Tooltip'
import { Button } from '../Button'
import { useEffect } from 'react'
import { Lesson } from '@contentlayer/generated'

type ActivityLinkProps = {
    lesson: Lesson
}
export const ActivityPath: FC<ActivityLinkProps> = ({ lesson }) => {
    const [tooltipVisible, setTooltipVisible] = useState(false)


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (target && !target.closest('.star-div')) {
                setTooltipVisible(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <Tooltip content={<ActivityTooltipContent lesson={lesson} />} visible={tooltipVisible}>
            <div className='
                star-div
                rounded-full flex items-center justify-center 
                cursor-pointer hover:scale-105 duration-300
                bg-gray-800 w-24 h-24'
                onClick={() => setTooltipVisible(true)}>
                <FaStar className='w-10' />
            </div>
        </Tooltip>
    )
}

const ActivityTooltipContent: FC<ActivityLinkProps> = ({ lesson }) => {
    return (
        <div className='star-div flex flex-col items-center gap-4'>
            {lesson.description}
            <Button>
                <Link href={lesson.slug}>
                    Start Lesson
                </Link>
            </Button>
        </div>
    )
}

