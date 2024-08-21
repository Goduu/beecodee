import React, { FC } from 'react'
import { Bee } from '../Svgs/Bee'
import { CounterUp } from '../CounterUp'
import { allActivities, allLessons, allUnits } from '@contentlayer/generated'
import { BeeKnowledge } from '../Svgs/BeeKnowledge'

export const SiteNumbers: FC = () => {
    const lessonSize = allLessons.length
    const activitySize = allActivities.length
    const unitSize = allUnits.length

    const siteNumbers = [
        { label: "Course", countTo: 1 },
        { label: "Units", countTo: unitSize },
        { label: "Lessons", countTo: lessonSize },
        { label: "Activities", countTo: activitySize }
    ]

    return (
        <div className='flex flex-col items-center gap-1 justify-center text-center'>
            <div className='flex flex-col sm:flex-row items-center gap-10 sm:gap-4 w-4/5'>
                {siteNumbers.map((siteNumber) => (
                    <div key={siteNumber.label} className='w-4/5 flex flex-col text-5xl font-black gap-1 text-start items-center leading-loose select-none flex-wrap'>
                        <CounterUp countTo={siteNumber.countTo} scrollSpyDelay={300} />
                        <p className='text-4xl text-center sm:text-start'><span className='text-amber-500'>bee</span>{siteNumber.label}</p>
                    </div>
                ))}
            </div>
            <BeeKnowledge className='w-96' />
        </div>
    )
}

