import React, { FC } from "react"
import { FaBugSlash, IoMdFlower } from "../Svgs/Icons"

type PathWayCompleteButtonProps = {
  size?: "small" | "medium" | "large"
  className?: string
  type?: "theory" | "bugFight"
  onClick?: () => void
}

export const PathWayCompleteButton: FC<PathWayCompleteButtonProps> = ({
  size = "medium",
  className,
  type = "theory",
  onClick,
}) => {
  const dimensions = size === "medium" ? "w-20 h-20" : size === "small" ? "w-16 h-16" : "w-24 h-24"
  const flowerDimensions = size === "medium" ? "w-14" : size === "small" ? "w-10" : "w-16"
  const bugDimensions = size === "medium" ? "w-12" : size === "small" ? "w-8" : "w-14"

  return (
    <div
      className={`
                flex cursor-pointer 
                justify-center rounded-full border-b-8 
                duration-300 hover:scale-105
                hover:border-b-2 ${dimensions} ${className}`}
      onClick={onClick}
    >
      {type === "theory" ? (
        <IoMdFlower className={`${flowerDimensions} text-white`} />
      ) : (
        <FaBugSlash className={`${bugDimensions} text-white`} />
      )}
    </div>
  )
}
