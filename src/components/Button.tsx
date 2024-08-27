"use client"
import React, { FC, ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  className?: string
  disabled?: boolean
  ping?: boolean
  color?: "primary" | "secondary"
  size?: "small" | "medium" | "large"
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled,
  ping = false,
  size,
  color = "primary",
  onClick,
}) => {
  const handleClicks = () => {
    if (disabled) return
    onClick?.()
  }

  return (
    <form action={handleClicks} className={`h-12 ${size === "large" && "h-16"}`}>
      <button
        type="submit"
        className={`
                    relative h-fit
                    rounded-md
                    border-2 border-b-4 p-2 font-bold
                    duration-150 hover:mt-1 hover:border-b-2 hover:shadow-sm
                    ${size === "small" && "p-[3px] text-xs"}
                    ${size === "large" && "p-4 text-xl"}
                    ${color === "primary" && "border-amber-600 bg-amber-500 text-gray-50"}
                    ${color === "secondary" && "border-gray-300 text-current text-slate-900 dark:text-gray-50 "}
                    disabled:mt-0 disabled:scale-100 disabled:border-b-4 disabled:border-slate-500 disabled:bg-slate-500
                    ${className}
                    `}
        disabled={disabled}
      >
        <Ping ping={ping} />
        {children}
      </button>
    </form>
  )
}

const Ping: FC<{ ping: boolean }> = ({ ping }) => {
  return (
    <div className="absolute -right-1 -top-1">
      <span className={`${ping ? "opacity-100" : "opacity-0"} relative flex h-3 w-3`}>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full border opacity-75 dark:bg-slate-50"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full dark:bg-slate-50 "></span>
      </span>
    </div>
  )
}
