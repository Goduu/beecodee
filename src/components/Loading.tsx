import React, { FC } from "react"
import { ImSpinner } from "./Svgs/Icons"

type LoadingProps = {
  visible: boolean
}

export const Loading: FC<LoadingProps> = ({ visible }) => {
  return (
    <div
      className={`${!visible && "hidden"} fixed left-0 top-0  z-50 h-screen w-screen items-center justify-center bg-slate-500 bg-opacity-10 py-10 backdrop-blur-md`}
    >
      <div className="flex h-full items-center justify-center">
        <ImSpinner className="h-16 w-16 animate-spin" />
      </div>
    </div>
  )
}
