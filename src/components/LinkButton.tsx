"use client"
import Link from 'next/link'
import React, { FC, ReactNode } from 'react'
import { UrlObject } from 'url'

type LinkButtonProps = {
    children: ReactNode
    className?: string
    color?: "primary" | "secondary"
    size?: "small" | "medium" | "large"
    href: string | UrlObject
    onClick?: () => void
}

export const LinkButton: FC<LinkButtonProps> = ({ children, className, href, size, color = "primary", onClick }) => {

    return (
        <div className='h-12 hover:pt-1 duration-150'>
            <Link
                href={href}
                className={`
                    relative 
                    border-2 border-b-4 hover:border-b-2 rounded-md
                    font-bold hover:shadow-sm h-fit p-2
                    ${size === "small" && "p-[3px] text-xs"}
                    ${color === "primary" && "bg-amber-500 text-gray-50 border-amber-600"}
                    ${color === "secondary" && "text-gray-50 border-gray-300 "}
                    ${className}
                    `}>
                {children}
            </Link >
        </div>

    )
}

const Ping: FC<{ ping: boolean }> = ({ ping }) => {
    return (
        <div className='absolute -right-1 -top-1'>
            <span className={`${ping ? "opacity-100" : "opacity-0"} relative flex h-3 w-3`}>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full border dark:bg-slate-50 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 dark:bg-slate-50 "></span>
            </span>
        </div>
    )
}
