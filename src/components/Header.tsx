import Link from 'next/link'
import React from 'react'
import { Beecode, RiJavascriptFill } from './Icons'

export const Header = () => {
    return (
        <header className='flex items-center w-full justify-between'>
            <Link href={"/"}>
                <Beecode className="w-44 sm:w-72" />
            </Link>
            <RiJavascriptFill className="w-20 pr-5" />
        </header>
    )
}
