import React, { FC } from "react"
import { PathWayCompleteButton } from "../Unit/PathWayCompleteButton"
import { CircularProgress } from "../Activity/CircularProgress"
import { PathwayButton } from "../Activity/PathwayButton"

export const FindYourPath: FC = () => {
  return (
    <div className="flex w-screen flex-col items-center justify-center gap-10 sm:flex-row sm:gap-4">
      <div className="flex w-4/5 items-center justify-center">
        <div className="flex w-full flex-col items-center sm:w-1/2">
          <div className="flex flex-col items-center gap-2">
            <div className="">
              <PathWayCompleteButton size="small" />
            </div>
            <div className="mr-24">
              <CircularProgress percent={75} size="small">
                <PathwayButton size="small" />
              </CircularProgress>
            </div>
            <div className="mr-24">
              <CircularProgress percent={0} size="small">
                <PathwayButton size="small" />
              </CircularProgress>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 text-center sm:w-1/2">
          <div className="flex w-4/5 flex-col gap-4">
            <p className="text-6xl font-bold text-amber-500">Find your path</p>
            <p className="text-center text-xl sm:text-start">
              Welcome to an adventure where learning meets fun! With our app, you can discover your own unique journey,
              blending excitement and education seamlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
