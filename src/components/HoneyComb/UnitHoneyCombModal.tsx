"use client"
import React, { useRef } from "react"
import { close, unitHoneyCombModalStore } from "./UnitHoneyCombModal.store"
import { useStore } from "../useStore"
import { useDetectOuterClickAndEsc } from "../useDetectOuterClickAndEsc"
import { GiHoneypot } from "../Svgs/Icons"
import { Mdx } from "../MdxComponents"
import { useLocaleContext } from "../Localization/LocaleContext"

export const UnitHoneyCombModal = () => {
  const { locale } = useLocaleContext()
  const isOpen = useStore(unitHoneyCombModalStore, (state) => state.isOpen)
  const unit = useStore(unitHoneyCombModalStore, (state) => state.unit)
  const modalRef = useRef(null)
  useDetectOuterClickAndEsc({ ref: modalRef, onOuterClick: close })

  if (!unit) return null

  return (
    <div
      className={`${isOpen ? "fixed" : "hidden"} left-0 top-0  z-50 h-screen w-screen items-center justify-center bg-slate-200 bg-opacity-10 py-10 backdrop-blur-md dark:bg-slate-500 dark:bg-opacity-10`}
    >
      <div className="flex min-h-screen flex-col justify-center py-6 sm:py-12">
        <div ref={modalRef} className={`relative py-3 ease-in-out sm:mx-auto sm:max-w-2xl`}>
          <div className="absolute inset-0 skew-y-6 transform rounded-3xl bg-gradient-to-r from-amber-300 to-amber-600 shadow-lg sm:-rotate-6 sm:skew-y-0"></div>
          <div className="relative bg-slate-300 px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20 dark:bg-slate-800">
            <div className="mx-auto max-w-2xl">
              <div>
                <h1 className="flex items-center gap-2 text-2xl font-semibold">
                  <GiHoneypot className="-mt-1 w-10" />
                  {unit?.title[locale]}
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="flex max-h-96 flex-col items-center space-y-4 py-8 text-base leading-6 sm:text-lg sm:leading-7">
                  <div className="w-full flex-wrap overflow-scroll">
                    {/* fix this code */}
                    {isOpen && <Mdx code={"unit.body.code"} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
