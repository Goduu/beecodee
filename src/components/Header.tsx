import Link from 'next/link'
import React from 'react'
import { Beecode, BeeHead, BiLogIn, RiJavascriptFill } from './Icons'
import { IconButton } from './IconButton'
import { userMetadata } from '@/lib/auth'
import { HoverTooltip } from './HoverTooltip'

export const Header = async () => {
    const userData = await userMetadata()
    console.log("userData", userData)

    return (
        <header className='flex items-center w-full justify-between'>
            <Link href={"/"}>
                <Beecode className="w-44 sm:w-72" />
            </Link>
            <div className='flex items-center gap-2'>
                {!userData ?
                    <IconButton>
                        <Link href={"/login"}>
                            <BiLogIn className="w-16 pr-5" />
                        </Link>
                    </IconButton>
                    :
                    <HoverTooltip text={userData.name} position='bottom'>
                        <IconButton color='secondary'>
                            <BeeHead className="w-16 pr-5" />
                        </IconButton>
                    </HoverTooltip>
                }

                <HoverTooltip text={"JS"} position='bottom'>
                    <IconButton color='secondary'>
                        <RiJavascriptFill className="w-16 pr-5" />
                    </IconButton>
                </HoverTooltip>
            </div>
        </header>
    )
}
