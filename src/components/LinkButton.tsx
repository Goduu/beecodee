"use client"
import Link from "next/link"
import React, { FC, ReactNode } from "react"
import { UrlObject } from "url"

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
    <div className="h-12 duration-150 hover:pt-1">
      <Link
        href={href}
        className={`
                    relative 
                    h-fit rounded-md border-2 border-b-4
                    p-2 font-bold hover:border-b-2 hover:shadow-sm
                    ${size === "small" && "p-[3px] text-xs"}
                    ${color === "primary" && "border-amber-600 bg-amber-500 text-gray-50"}
                    ${color === "secondary" && "border-gray-300 text-gray-50 "}
                    ${className}
                    `}
      >
        {children}
      </Link>
    </div>
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
