import React, { FC } from 'react'
import { PathWayCompleteButton } from '../Unit/PathWayCompleteButton'
import { CircularProgress } from '../Activity/CircularProgress'
import { PathwayButton } from '../Activity/PathwayButton'

export const FindYourPath: FC = () => {
    return (
        <div className='flex flex-col sm:flex-row w-screen items-center justify-center gap-10 sm:gap-4'>
            <div className='w-4/5 flex items-center justify-center'>
                <div className='w-full sm:w-1/2 items-center flex flex-col'>
                    <div className='flex flex-col gap-2 items-center'>
                        <div className=''>
                            <PathWayCompleteButton size='small' />
                        </div>
                        <div className='mr-24'>
                            <CircularProgress percent={75} size='small'>
                                <PathwayButton size='small' />
                            </CircularProgress>
                        </div>
                        <div className='mr-24'>
                            <CircularProgress percent={0} size='small'>
                                <PathwayButton size='small' />
                            </CircularProgress>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col items-center text-center sm:w-1/2 gap-4'>
                    <div className='w-4/5 flex flex-col gap-4'>
                        <p className='text-6xl font-bold text-amber-500'>Find your path</p>
                        <p className='text-xl text-center sm:text-start'>Welcome to an adventure where learning meets fun! With our app, you can discover your own unique journey, blending excitement and education seamlessly.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

