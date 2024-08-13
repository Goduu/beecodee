"use client"
import React, { FC, ReactNode } from 'react'

type IconButtonProps = {
    className?: string
    disabled?: boolean
    color?: "primary" | "secondary"
    size?: "small" | "medium" | "large"
    children: ReactNode
    onClick?: () => void
}

export const IconButton: FC<IconButtonProps> = ({ children, className, disabled, size, color = "primary", onClick }) => {

    const handleClicks = () => {
        if (disabled) return
        onClick?.()
    }

    return (
        <form action={handleClicks}>
            <button type="submit"
                className={`
                    relative hover:mt-1
                    duration-150  
                    font-bold hover:shadow-sm rounded-md h-fit p-1
                    ${size === "small" && "p-[3px] text-xs"}
                    ${color === "primary" && "text-amber-500 drop-shadow-xl"}
                    ${color === "secondary" && "text-gray-50  "}
                    disabled:scale-100 disabled:text-slate-500
                    ${className}
                    `}
                disabled={disabled}>
                {children}
            </button>
        </form>
    )
}
