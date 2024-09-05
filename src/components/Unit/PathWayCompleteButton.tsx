import React, { FC } from "react"
import { IoMdFlower } from "../Svgs/Icons"

type PathWayCompleteButtonProps = {
  size?: "small" | "medium" | "large"
  className?: string
  onClick?: () => void
}

export const PathWayCompleteButton: FC<PathWayCompleteButtonProps> = ({ size = "medium", className, onClick }) => {
  const dimensions = size === "medium" ? "w-32 h-32" : size === "small" ? "w-20 h-20" : "w-40 h-40"
  const iconDimensions = size === "medium" ? "w-16" : size === "small" ? "w-12" : "w-20"

  return (
    <div
      className={`
                flex cursor-pointer 
                justify-center rounded-full border-b-8 
                duration-300 hover:scale-105
                hover:border-b-2 ${dimensions} ${className}`}
      onClick={onClick}
    >
      <IoMdFlower className={`${iconDimensions} text-white`} />
    </div>
  )
}
