import Link from 'next/link'
import React from 'react'
import { Beecode } from './Icons'

export const Header = () => {
    return (
        <header className='flex items-center w-full'>
            <Link href={"/"}>
                <Beecode className="w-44 sm:w-72" />
            </Link>
        </header>
    )
}
