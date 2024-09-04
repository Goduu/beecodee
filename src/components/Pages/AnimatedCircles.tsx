import React from "react"
import { AnimatedCircle } from "./AnimatedCircle"
import { IoMdFlower } from "../Svgs/Icons"

export const AnimatedCircles = () => {
  return (
    <div>
      <div className="absolute -left-[2%] top-[13%] -z-10 sm:left-[10%]">
        <AnimatedCircle className="origin-bottom-right" delay={0.8}>
          <div className="size-20 -rotate-12 rounded-full bg-gradient-to-br from-primary-500/70  to-transparent p-2 text-white dark:text-slate-900  sm:size-24 lg:size-32">
            <IoMdFlower className="w-32" />
          </div>
        </AnimatedCircle>
      </div>
      <div className="absolute right-[10%] top-[13%] -z-10 max-md:hidden">
        <AnimatedCircle className="origin-bottom-left" move={60} delay={1}>
          <div className="size-24 rotate-12 rounded-full bg-gradient-to-bl from-quaternary-500/70  to-transparent p-2 text-white dark:text-slate-900  lg:size-32">
            <IoMdFlower className="w-32" />
          </div>
        </AnimatedCircle>
      </div>
      <div className="absolute bottom-[10%] left-[10%] -z-10 max-md:hidden">
        <AnimatedCircle className="origin-top-right" move={60} delay={1.2}>
          <div className="size-24 -rotate-6 rounded-full bg-gradient-to-r from-tertiary-500/30  to-transparent p-2 text-white dark:text-slate-900 lg:size-32">
            <IoMdFlower className="w-32" />
          </div>
        </AnimatedCircle>
      </div>
      <div className="absolute -right-[2%] top-1/3 -z-10 sm:right-[10%] md:top-2/3">
        <AnimatedCircle className="origin-top-left" delay={1.4}>
          <div className="size-20 rotate-12 rounded-full bg-gradient-to-l from-secondary-500/30  to-transparent p-2 text-white dark:text-slate-900  sm:size-24 lg:size-32">
            <IoMdFlower className="w-24 sm:w-32" />
          </div>
        </AnimatedCircle>
      </div>
    </div>
  )
}
