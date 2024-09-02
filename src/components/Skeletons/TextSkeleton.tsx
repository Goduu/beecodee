import React, { FC } from "react"

type TextSkeletonProps = {
  size?: "small" | "medium" | "large"
  className?: string
}

export const TextSkeleton: FC<TextSkeletonProps> = ({ size = "medium", className }) => {
  const dimensions = size === "small" ? "h-10 w-20" : size === "medium" ? "h-14 w-36" : "h-18 w-40"

  return (
    <div
      className={`animate-pulse rounded-2xl bg-slate-300 p-4 drop-shadow-xl dark:bg-slate-600 ${className} ${dimensions}`}
    ></div>
  )
}
