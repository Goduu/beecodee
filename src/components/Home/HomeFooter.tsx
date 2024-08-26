import React from "react"
import { FooterHoney } from "../Svgs/FooterHoney"

export const HomeFooter = () => {
  return (
    <>
      <div className="relative h-96 w-screen text-center">
        <FooterHoney className="absolute bottom-0 w-full" />
      </div>
      <div className="-mt-1 flex h-16 flex-col items-center gap-4 bg-amber-500 text-xl font-bold">2024 Beecodee</div>
    </>
  )
}
