import React, { FC } from "react"
import { Beecodee } from "../Svgs/Beecodee"
import { Bee } from "../Svgs/Bee"

export const BeeSlogan: FC = () => {
  return (
    <div className="flex w-screen flex-col items-center gap-10 sm:flex-row sm:gap-4">
      <div className="flex flex-col items-center gap-4 text-center sm:w-1/2">
        <div className="flex w-4/5 select-none flex-col items-center gap-4 text-start leading-loose">
          <p className="flex text-5xl font-bold">
            <span className="text-amber-500">bee </span> creative
          </p>
          <p className="flex text-5xl font-bold">
            <span className="text-amber-500">bee </span> innovative
          </p>
          <p className="flex text-5xl font-bold">
            <span className="text-amber-500">bee </span> adaptive
          </p>
          <p className="flex text-5xl font-bold">
            <span className="text-amber-500">beecodee </span>
          </p>

          <p className="text-center text-xl sm:text-start"></p>
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <div className="flex flex-col items-center gap-2">
          <Bee className="w-56" />
        </div>
      </div>
    </div>
  )
}
