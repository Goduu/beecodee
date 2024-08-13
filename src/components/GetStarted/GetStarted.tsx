import React from 'react'
import { WhatToLearn } from './WhatToLearn'

export const GetStarted = () => {
    return (
        <div className='flex flex-col gap-10 items-center'>
            <div className='font-extrabold text-3xl text-amber-500'>
                Let&apos;s Go!
            </div>
            <WhatToLearn />
        </div>
    )
}
