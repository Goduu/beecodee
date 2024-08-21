import { userMetadata } from '@/lib/auth'
import { fetchUserXpollen } from '@/lib/supabase/api/fetchUserXpollen'
import React from 'react'
import { FaGithub, SiJavascript } from './Svgs/Icons'
import { Pollen } from './Svgs/Pollen'

export const UserCard = async () => {
    const userData = await userMetadata()
    const userXpollen = await fetchUserXpollen()

    return (
        <div className="group relative flex after:shadow-lg after:shadow-black text-sm font-semibold">
            <div className="flex items-center gap-2">
                <div className="border p-2 flex items-center gap-2 transition-all w-60 delay-100 rounded-xl duration-1000 group-hover:w-80">
                    <img
                        className="rounded-full w-28 absolute -left-16"
                        src={userData?.avatarUrl}
                        alt="User avatar"
                    />
                    <div className="flex flex-col items-center md:items-start ml-16">
                        <p className="truncate w-4/5">{userData?.name}</p>
                        <p className="text-lg font-bold flex items-center gap-2"> <Pollen className='w-8' />{userXpollen}</p>
                        <SiJavascript className='w-8' />
                    </div>
                </div>
                <p className="absolute right-2 transition-all opacity-0 delay-100 duration-700 group-hover:right-3 group-hover:opacity-100 hover:scale-125">
                    <a
                        href={`https://github.com/${userData?.userName}`}
                        target="_blank"
                        className="transition-transform transform"
                    >
                        <span className="sr-only">Github</span>
                        <FaGithub className='w-7' />
                    </a>
                </p>
            </div>
        </div>
    )
}
