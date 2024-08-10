import React, { FC, useRef, useState } from 'react'
import { LuCheckCircle } from '../Icons'
import { Unit } from '@contentlayer/generated'
import { Tooltip } from '../Activity/Tooltip'
import { Button } from '../Button'
import { useDetectOuterClick } from '../useDetectOuterClick'

type ReviewUnitProps = {
    unit: Unit
}

export const ReviewUnit: FC<ReviewUnitProps> = ({ unit }) => {
    const [tooltipVisible, setTooltipVisible] = useState(false)
    const clickOutSideRef = useRef<HTMLDivElement>(null)
    useDetectOuterClick({ ref: clickOutSideRef, onOuterClick: () => setTooltipVisible(false) })

    return (
        <div ref={clickOutSideRef}
            className="flex justify-center items-center " >
            <Tooltip content={<ReviewUnitTooltipContent unit={unit} />} visible={tooltipVisible}>
                <div className='
                    border-b-8 border-green-600
                    rounded-full flex justify-center 
                    cursor-pointer hover:scale-105 hover:border-b-2 duration-300
                    bg-green-500 w-32 h-32'
                    onClick={() => setTooltipVisible(!tooltipVisible)}
                >
                    <LuCheckCircle className='w-16' />
                </div>
            </Tooltip>
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
                Review Unit (ToBeImplemented)
            </Button>
        </div>
    )
}