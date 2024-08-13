import React from 'react'
import { Bee, FooterHoney } from '../Icons'

export const HomeFooter = () => {
    return (
        <>
            <div className="relative h-96 text-center w-screen">
                <FooterHoney className="w-full absolute bottom-0" />
            </div>
            <div className="flex flex-col items-center gap-4 bg-amber-500 text-xl font-bold -mt-1 h-16">
                2024 Beecodee
            </div>
        </>
    )
}
