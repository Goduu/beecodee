import React, { FC } from "react"

type CircleSkeletonProps = {
  size?: "small" | "medium" | "large"
  className: string
}

export const CircleSkeleton: FC<CircleSkeletonProps> = ({ size = "medium", className }) => {
  const dimensions = size === "small" ? "h-20 w-20" : size === "medium" ? "h-36 w-36" : "h-40 w-40"
  return (
    <div
      className={`animate-pulse rounded-full bg-slate-300 p-4 drop-shadow-xl dark:bg-slate-600 ${className} ${dimensions}`}
    ></div>
  )
}
