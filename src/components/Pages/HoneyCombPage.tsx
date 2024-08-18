import { allUnits } from '@contentlayer/generated'
import React from 'react'
import { HoneyComb } from '../HoneyComb/HoneyComb'

export const HoneyCombPage = () => {
    return (
        <div className="flex flex-wrap items-center py-20 px-5 gap-2 min-h-[450px] w-[450px] sm:w-[600px] justify-center">
            {allUnits.map((unit) => {
                return (
                    <HoneyComb key={unit.id} unit={unit} />
                )
            })
            }
        </div>
    )
}
