import React, { FC } from "react"
import { FaBug, IoMdFlower } from "../Svgs/Icons"

type PathwayButtonProps = {
  size?: "small" | "medium" | "large"
  type?: "theory" | "bugFight"
  onClick?: () => void
}
export const PathwayButton: FC<PathwayButtonProps> = ({ size = "medium", type, onClick }) => {
  const dimensions = size === "medium" ? "w-18 h-18" : size === "small" ? "w-16 h-16" : "w-24 h-24"
  const iconDimensions = size === "medium" ? "w-14" : size === "small" ? "w-12" : "w-16"

  return (
    <div
      className={`
                flex cursor-pointer
                items-center justify-center rounded-full border-b-8 
                border-gray-400 dark:border-gray-900 bg-gray-200 duration-300 hover:scale-105
                hover:border-b-2 dark:bg-gray-800 ${dimensions}`}
      onClick={onClick}
    >
      {type === "theory" ? <IoMdFlower className={iconDimensions} /> : <FaBug className={iconDimensions} />}
    </div>
  )
}
