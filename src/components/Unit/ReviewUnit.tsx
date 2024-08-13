import React, { FC, useRef, useState } from 'react'
import { Unit } from '@contentlayer/generated'
import { TooltipClick } from '../TooltipClick'
import { Button } from '../Button'
import { useDetectOuterClickAndEsc } from '../useDetectOuterClickAndEsc'
import { PathWayCompleteButton } from './PathWayCompleteButton'

type ReviewUnitProps = {
    unit: Unit
}

export const ReviewUnit: FC<ReviewUnitProps> = ({ unit }) => {
    const [tooltipVisible, setTooltipVisible] = useState(false)
    const clickOutSideRef = useRef<HTMLDivElement>(null)
    useDetectOuterClickAndEsc({ ref: clickOutSideRef, onOuterClick: () => setTooltipVisible(false) })

    return (
        <div ref={clickOutSideRef}
            className="flex justify-center items-center " >
            <TooltipClick content={<ReviewUnitTooltipContent unit={unit} />} visible={tooltipVisible}>
                <PathWayCompleteButton onClick={() => setTooltipVisible(!tooltipVisible)} />
            </TooltipClick>
        </div>
    )
}


const ReviewUnitTooltipContent: FC<ReviewUnitProps> = ({ unit }) => {

    const handleStartLesson = () => {
        console.log('toBeImplemented')
    }

    return (
        <div className='flex flex-col items-center gap-4'>
            {unit.description}
            <Button onClick={handleStartLesson}>
                Review Unit @TODO
            </Button>
        </div>
    )
}