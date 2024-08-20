import React, { FC } from 'react'
import { CounterUp } from '../CounterUp'
import { Button } from '../Button'
import { Pollen } from '../Svgs/Pollen'
import { MdStar } from '../Svgs/Icons'
import { Bee } from '../Svgs/Bee'
import { redirect } from 'next/navigation'

type EndLessonXpPageProps = {
    lessonXp: number
}

export const EndLessonXpPage: FC<EndLessonXpPageProps> = ({ lessonXp }) => {
    return (
        <div className='flex flex-col  font-black items-center justify-center gap-12'>
            <Bee className='w-56' />
            <div className='flex gap-4'>
                <div className='bg-amber-500 rounded-lg flex flex-col gap-1 h-28 w-44'>
                    <div className='px-3 mt-2 text-sm'>
                        COLLECTED XPOLEN
                    </div>
                    <div className='bg-white dark:bg-gray-900 rounded-lg h-full border-amber-500 border-4 justify-center flex items-center gap-2 text-xl'>
                        <Pollen className='w-8' /><CounterUp countTo={lessonXp} />
                    </div>
                </div>
                <div className='bg-lime-500 rounded-lg flex flex-col gap-1 h-28 w-44'>
                    <div className='px-3 mt-2 text-sm'>
                        NICE
                    </div>
                    <div className='bg-white dark:bg-gray-900 rounded-lg h-full border-lime-500 border-4 justify-center flex items-center gap-2 text-xl'>
                        <MdStar className='w-8' /><CounterUp countTo={96} /> %
                    </div>
                </div>
            </div>
            <Button onClick={() => redirect("/path")}>Continue</Button>
        </div>
    )
}
