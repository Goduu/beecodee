import { userMetadata } from '@/lib/auth'
import { fetchUserXpollen } from '@/lib/supabase/api/fetchUserXpollen'
import React from 'react'
import { Pollen } from '../Svgs/Pollen'
import { FaBookBookmark, SiJavascript } from '../Svgs/Icons'
import { fetchUserCompletedLessonByUnitId } from '@/lib/supabase/api/fetchUserFinishedLessons'

export const ProfilePage = async () => {
    const userData = await userMetadata()
    const userXpollen = await fetchUserXpollen()
    const userFinishLessons = await fetchUserCompletedLessonByUnitId()
    const joinedDateMMYYY = userData && new Date(userData?.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) || ""

    return (
        <div className='flex flex-col gap-4 items-center font-bold'>
            <h1>ProfilePage</h1>

            <img src={userData?.avatarUrl} alt="avatar" className='rounded-full h-32' />
            <div className='flex  flex-col gap-4 rounded-3xl p-4 items-center'>
                <div className='flex flex-col gap-4'>
                    <div className='text-xl'>{userData?.name}</div>
                    <div className='text-sm opacity-50 text-slate-900 dark:text-slate-50'>Started on: {joinedDateMMYYY}</div>
                    <div className='flex items-center gap-2'>
                        <Pollen className='w-8' />{userXpollen}  XPollen
                    </div>
                    <div className='flex items-center gap-4'>
                        <FaBookBookmark className='w-7' />
                        {Array.from(userFinishLessons?.values() || []).reduce((total, lesson) => total + lesson.size, 0)}  <span>Finished Lessons</span>
                    </div>
                    <SiJavascript className='w-7 py-2' />
                </div>
            </div>
        </div>
    )
}
