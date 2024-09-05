import React, { FC } from "react"
import { FaBug, IoMdFlower } from "../Svgs/Icons"

type PathwayButtonProps = {
  className: string
  size?: "small" | "medium" | "large"
  type?: "theory" | "bugFight"
  onClick?: () => void
}
export const PathwayButton: FC<PathwayButtonProps> = ({ size = "medium", type, onClick, className }) => {
  const dimensions = size === "medium" ? "w-20 h-20" : size === "small" ? "w-16 h-16" : "w-24 h-24"
  const flowerDimensions = size === "medium" ? "w-14" : size === "small" ? "w-10" : "w-16"
  const bugDimensions = size === "medium" ? "w-12" : size === "small" ? "w-8" : "w-14"

  return (
    <div
      className={`
                flex cursor-pointer
                items-center justify-center rounded-full border-b-8 
                duration-300 hover:scale-105 hover:border-b-2
                ${dimensions} ${className}`}
      onClick={onClick}
    >
      {type === "theory" ? (
        <IoMdFlower className={`${flowerDimensions} text-white`} />
      ) : (
        <FaBug className={`${bugDimensions} text-white`} />
      )}
    </div>
  )
}
