import React, { FC } from 'react'
import { Bee, Beecodee } from '../Icons'

export const BeeSlogan: FC = () => {
    return (
        <div className='flex flex-col sm:flex-row w-screen items-center gap-10 sm:gap-4'>
            <div className='flex flex-col items-center text-center sm:w-1/2 gap-4'>
                <div className='w-4/5 flex flex-col gap-4 text-start items-center leading-loose'>
                    <p className='text-5xl font-bold flex'><span className='text-amber-500'>bee </span> creative</p>
                    <p className='text-5xl font-bold flex'><span className='text-amber-500'>bee </span> innovative</p>
                    <p className='text-5xl font-bold flex'><span className='text-amber-500'>bee </span> adaptive</p>
                    <Beecodee className='h-20 -mt-4' />
                    <p className='text-xl text-center sm:text-start'></p>
                </div>
            </div>
            <div className='w-full sm:w-1/2'>
                <div className='flex flex-col gap-2 items-center'>
                    <Bee className='w-56' />
                </div>

            </div>
        </div>
    )
}

