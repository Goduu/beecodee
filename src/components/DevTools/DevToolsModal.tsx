"use client"
import React, { useRef } from "react"
import { useStore } from "../useStore"
import { useDetectOuterClickAndEsc } from "../useDetectOuterClickAndEsc"
import { Button } from "../Button"
import { close, devToolsModalStore } from "./DevToolsModal.store"
import { deleteUserProgress } from "@/lib/supabase/api/deleteUserProgress"
import { redirect } from "next/navigation"
import { TbPencilQuestion } from "../Svgs/Icons"

export const DevToolsModal = () => {
  const isOpen = useStore(devToolsModalStore, (state) => state.isOpen)
  const modalRef = useRef(null)
  useDetectOuterClickAndEsc({ ref: modalRef, onOuterClick: close })

  const handleResetCache = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div
      className={`${isOpen ? "fixed" : "hidden"} left-0 top-0  z-50 h-screen w-screen items-center justify-center bg-slate-500 bg-opacity-10 py-10 backdrop-blur-md`}
    >
      <div className="flex min-h-screen flex-col justify-center py-6 sm:py-12">
        <div ref={modalRef} className={`relative py-3 ease-in-out sm:mx-auto sm:max-w-xl`}>
          <div className="absolute inset-0 skew-y-6 transform rounded-3xl bg-gradient-to-r from-amber-300 to-amber-600 shadow-lg sm:-rotate-6 sm:skew-y-0"></div>
          <div className="relative bg-slate-800 px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="mx-auto max-w-md">
              <div>
                <h1 className="text-2xl font-semibold">DevTools</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="flex flex-col items-center space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                  <Button color="secondary" onClick={handleResetCache}>
                    Reset Cache
                  </Button>
                  <Button color="secondary" onClick={deleteUserProgress}>
                    Reset My Progress
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => {
                      close()
                      redirect("/dev/questionBuilder")
                    }}
                    className="flex gap-2"
                  >
                    GoTo QuestionBuilder <TbPencilQuestion className="w-6" />
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
