"use client"
import React, { FC, ReactNode } from "react"

type IconButtonProps = {
  id?: string
  className?: string
  disabled?: boolean
  color?: "primary" | "secondary"
  size?: "small" | "medium" | "large"
  children: ReactNode
  onClick?: () => void
}

export const IconButton: FC<IconButtonProps> = ({
  id,
  children,
  className,
  disabled,
  size,
  color = "primary",
  onClick,
}) => {
  const handleClicks = () => {
    if (disabled) return
    onClick?.()
  }

  return (
    <form action={handleClicks}>
      <button
        id={id}
        type="submit"
        className={`
                    relative h-fit
                    rounded-md  
                    p-1 font-bold duration-150 hover:shadow-sm
                    ${size === "small" && "p-[3px] text-xs"}
                    ${color === "primary" && "text-amber-500 drop-shadow-xl"}
                    ${color === "secondary" && "text-gray-50  "}
                    disabled:scale-100 disabled:text-slate-500
                    ${className}
                    `}
        disabled={disabled}
      >
        {children}
      </button>
    </form>
  )
}
