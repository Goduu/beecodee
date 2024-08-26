"use client"
import React, { FC, ReactNode } from "react"
import { useEffect } from "react"
import { createSwapy } from "swapy"

export const SwapyTest = () => {
  useEffect(() => {
    const container = document.querySelector(".container")!
    const swapy = createSwapy(container, {
      animation: "none",
      continuousMode: true,
    })
    swapy.onSwap(({ data }) => {
      console.log("data", data)
    })
  }, [])

  return (
    <div className="container flex w-[500px] gap-1 border-b-2 pl-10 pt-10">
      {options.map((slot) => {
        return (
          <div key={slot.swapySlot} className="flex" data-swapy-slot={slot.swapySlot}>
            <div
              className=" relative flex h-full cursor-pointer select-none items-center justify-center rounded-lg bg-emerald-700 px-1 py-2 text-xl"
              data-swapy-item={slot.swapySlot}
            >
              <div>{slot.item}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const options = [
  { swapySlot: "10", item: "const a = " },
  { swapySlot: "20", item: "foo / bar" },
  { swapySlot: "30", item: "test 123" },
]
