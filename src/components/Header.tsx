import Link from 'next/link'
import React from 'react'
import { Beecodee, BeeHead, IoMdLogOut, SiJavascript } from './Icons'
import { IconButton } from './IconButton'
import { signOut, userMetadata } from '@/lib/auth'
import { TooltipHover } from './TooltipHover'
import { XpollenHeader } from './XPollen/XpollenHeader'

export const Header = async () => {
    const userData = await userMetadata()

    return (
        <header className='absolute top-2 px-10 flex items-center w-full justify-center sm:justify-between'>
            <Link href={"/"}>
                <Beecodee className="w-44 sm:w-72 hidden sm:block" />
            </Link>
            <div className='flex items-center gap-2'>
                <TooltipHover text={"JS"} position='bottom'>
                    <IconButton color='secondary'>
                        <SiJavascript className="w-16 pr-5" />
                    </IconButton>
                </TooltipHover>
                <XpollenHeader />
                {userData &&
                    <>
                        <TooltipHover text={userData.name} position='bottom'>
                            <IconButton color='secondary'>
                                <BeeHead className="w-16 pr-5" />
                            </IconButton>
                        </TooltipHover>
                        <TooltipHover text={"Logout"} position='bottom'>
                            <IconButton color='secondary' onClick={signOut}>
                                <IoMdLogOut className="w-16 pr-5" />
                            </IconButton>
                        </TooltipHover>
                    </>
                }

            </div>
        </header>
    )
}
