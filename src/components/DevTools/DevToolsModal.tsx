"use client"
import React, { useRef } from 'react'
import { useStore } from '../useStore'
import { useDetectOuterClickAndEsc } from '../useDetectOuterClickAndEsc'
import { Button } from '../Button'
import { close, devToolsModalStore } from './DevToolsModal.store'
import { deleteUserProgress } from '@/lib/supabase/api/deleteUserProgress'
import { redirect } from 'next/navigation'
import { TbPencilQuestion } from '../Svgs/Icons'

export const DevToolsModal = () => {
    const isOpen = useStore(devToolsModalStore, (state) => state.isOpen);
    const modalRef = useRef(null)
    useDetectOuterClickAndEsc({ ref: modalRef, onOuterClick: close })

    const handleResetCache = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className={`${isOpen ? "fixed" : "hidden"} left-0 top-0  h-screen w-screen items-center justify-center backdrop-blur-md bg-slate-500 bg-opacity-10 py-10 z-50`}>
            <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <div ref={modalRef} className={`ease-in-out relative py-3 sm:max-w-xl sm:mx-auto`}>
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-600 shadow-lg transform skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-slate-800 shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">DevTools</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 flex flex-col items-center">
                                    <Button color="secondary" onClick={handleResetCache}>
                                        Reset Cache
                                    </Button>
                                    <Button color="secondary" onClick={deleteUserProgress}>
                                        Reset My Progress
                                    </Button>
                                    <Button color="secondary" onClick={() => {close(); redirect("/dev/questionBuilder")}} className='flex gap-2'>
                                        GoTo QuestionBuilder <TbPencilQuestion className='w-6' />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
