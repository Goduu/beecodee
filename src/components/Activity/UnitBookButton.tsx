import React, { FC } from 'react'
import { GiSpellBook } from '../Icons'
import { open } from './UnitBookModal.store'
import { Unit } from '@contentlayer/generated'

type UnitBookButtonProps = {
    unit: Unit
}

export const UnitBookButton:FC<UnitBookButtonProps> = ({unit}) => {
    if(unit.body.raw === "") return null

    return (
        <button onClick={() => open(unit)}>
            <GiSpellBook className='w-10 border rounded-md p-1 cursor-pointer' />
        </button>
    )
}
