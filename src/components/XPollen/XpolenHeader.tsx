import React, { FC } from 'react'
import { IconButton } from '../IconButton'
import { Pollen } from '../Icons'
import { fetchUserXpolen } from '@/lib/supabase/api/fetchUserXpolen'

export const XpolenHeader: FC = async () => {
    const userXpolen = await fetchUserXpolen()

    return (
        <IconButton className='flex items-center gap-1'>
            <Pollen className="w-10" />
            <p className='text-amber-500 font-black text-lg'>
                {userXpolen || 0}
            </p>
        </IconButton>
    )
}
