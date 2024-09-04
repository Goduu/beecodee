"use client"
import React, { useRef } from "react"
import { GithubButton } from "./SignInButtons/GithubButton"
import { close, loginModalStore } from "./LoginModal.store"
import { useStore } from "./useStore"
import { useDetectOuterClickAndEsc } from "./useDetectOuterClickAndEsc"

export const LoginModal = () => {
  const isOpen = useStore(loginModalStore, (state) => state.isOpen)
  const modalRef = useRef<HTMLDivElement>(null)
  useDetectOuterClickAndEsc({ ref: modalRef, onOuterClick: close })

  return (
    <div
      className={`${isOpen ? "fixed" : "hidden"} left-0 top-0  z-30 h-screen w-screen items-center justify-center bg-slate-300 bg-opacity-10 py-10 backdrop-blur-md  dark:bg-slate-500 dark:bg-opacity-10`}
    >
      <div className="flex min-h-screen flex-col justify-center py-6 sm:py-12">
        <div ref={modalRef} className={`relative py-3 ease-in-out sm:mx-auto sm:max-w-xl`}>
          <div className="absolute inset-0 skew-y-6 transform rounded-3xl bg-gradient-to-r from-amber-300 to-amber-600 shadow-lg sm:-rotate-6 sm:skew-y-0"></div>
          <div className="relative bg-slate-50 px-4 py-10 shadow-lg dark:bg-slate-800 sm:rounded-3xl sm:p-20">
            <div className="mx-auto max-w-md">
              <div>
                <h1 className="text-2xl font-semibold">Sign in / Sign up</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="flex flex-col items-center space-y-4 py-8 text-base leading-6 sm:text-lg sm:leading-7">
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
