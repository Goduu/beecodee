"use client"
import React, { useRef } from 'react'
import { GithubButton } from './SignInButtons/GithubButton'
import { close, loginModalStore } from './LoginModal.states'
import { useStore } from './useStore'
import { useDetectOuterClickAndEsc } from './useDetectOuterClickAndEsc'

export const LoginModal = () => {
    const isOpen = useStore(loginModalStore, (state) => state.isOpen);
    const modalRef = useRef(null)
    useDetectOuterClickAndEsc({ ref: modalRef, onOuterClick: close })

    return (
        <div className={`${isOpen ? "fixed" : "hidden"} left-0 top-0  h-screen w-screen items-center justify-center backdrop-blur-md bg-slate-500 bg-opacity-10 py-10 z-50`}>
            <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <div ref={modalRef} className={`ease-in-out relative py-3 sm:max-w-xl sm:mx-auto`}>
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-500 shadow-lg transform skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-slate-700 shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Sign in / Sign up</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 flex flex-col items-center">
                                    <GithubButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
