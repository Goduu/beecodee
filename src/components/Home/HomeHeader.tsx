"use client"
import React from 'react'
import { Beecodee } from '../Icons'
import { usePathname } from 'next/navigation'

export const HomeHeader = () => {
    const pathname = usePathname()

    return (
        <div className={`fixed top-0 backdrop-blur-md w-screen z-50 ${pathname !== "/" && "hidden"}`}>
            <div className='w-screen flex items-center justify-center'>
                <Beecodee className="w-64" />
            </div>
            <hr />
        </div>
    )
}
