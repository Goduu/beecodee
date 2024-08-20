"use client"
import React, { useRef } from 'react'
import { close, unitHoneyCombModalStore } from './UnitHoneyCombModal.store'
import { useStore } from '../useStore'
import { useDetectOuterClickAndEsc } from '../useDetectOuterClickAndEsc'
import { GiHoneypot } from '../Svgs/Icons'
import { Mdx } from '../MdxComponents'

export const UnitHoneyCombModal = () => {
  const isOpen = useStore(unitHoneyCombModalStore, (state) => state.isOpen);
  const unit = useStore(unitHoneyCombModalStore, (state) => state.unit);
  const modalRef = useRef(null)
  useDetectOuterClickAndEsc({ ref: modalRef, onOuterClick: close })

  if (!unit) return null

  return (
    <div className={`${isOpen ? "fixed" : "hidden"} left-0 top-0  h-screen w-screen items-center justify-center backdrop-blur-md bg-slate-200 dark:bg-slate-500 bg-opacity-10 py-10 z-50`}>
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div ref={modalRef} className={`ease-in-out relative py-3 sm:max-w-2xl sm:mx-auto`}>
          <div
            className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-600 shadow-lg transform skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl">
          </div>
          <div className="relative px-4 py-10 bg-slate-300 dark:bg-slate-800 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-2xl mx-auto">
              <div>
                <h1 className="text-2xl font-semibold flex gap-2 items-center"><GiHoneypot className='w-10 -mt-1' />{unit?.title}</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 sm:text-lg sm:leading-7 flex flex-col items-center max-h-96">
                  <div className='overflow-scroll flex-wrap w-full'>
                    {isOpen && <Mdx code={unit.body.code} />}
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
