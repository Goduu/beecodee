"use client"
import React, { FC } from "react"
import { IoClose } from "./Svgs/Icons"
import { IconButton } from "./IconButton"

type ProgressBar = {
  size: "small" | "medium" | "large"
  onClose?: () => void
  progress: number
}

export const ProgressBar: FC<ProgressBar> = ({ size = "medium", progress, onClose }) => {
  const heightClass = size === "small" ? "h-1" : size === "medium" ? "h-4" : "h-6"

  return (
    <header className="mx-auto flex w-full max-w-[1140px] items-center justify-between gap-x-7 px-10 pt-[20px] lg:pt-[50px]">
      <form action={onClose}>
        <button type="submit">
          <IoClose className="h-6 w-6 cursor-pointer transition hover:opacity-75" />
        </button>
      </form>
      <div
        className={`relative h-4 w-full overflow-hidden rounded-full bg-gray-200 bg-secondary ${heightClass}`}
        role="progressbar"
      >
        <div
          className={`rounded-full bg-lime-500 ${heightClass} transition duration-300 ease-in-out`}
          style={{ width: `${progress}%`, transition: "width 2s" }}
        />
      </div>
    </header>
  )
}
