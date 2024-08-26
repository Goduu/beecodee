import React from "react"
import { WhatToLearn } from "./WhatToLearn"

export const GetStarted = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="text-3xl font-extrabold text-amber-500">Let&apos;s Go!</div>
      <WhatToLearn />
    </div>
  )
}
