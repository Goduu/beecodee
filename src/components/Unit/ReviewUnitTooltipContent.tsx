import { Unit } from '@contentlayer/generated'
import React, { FC } from 'react'
import { LinkButton } from '../LinkButton'
import { choseRandomActivities } from './ReviewUnit.functions'

type ReviewUnitTooltipContentProps = {
    unit: Unit
}
export const ReviewUnitTooltipContent: FC<ReviewUnitTooltipContentProps> = ({ unit }) => {

    return (
        <div className='flex flex-col items-center gap-4'>
            {unit.description}
            <LinkButton href={{
                pathname: '/lessons/review',
                query: { activities: JSON.stringify(choseRandomActivities(unit)) },
            }}>
                Review Unit
            </LinkButton>
        </div>
    )
}