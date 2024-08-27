import React, { forwardRef, ReactNode } from "react"

type ItemProps = {
  id: number
  isOverlay?: boolean
  isActive?: boolean
  children: ReactNode
}

export const Item = forwardRef<any, ItemProps>(({ id, isActive, isOverlay, children, ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={`rounded-lg bg-slate-800 px-1 py-2 text-xl font-black
        ${isOverlay ? "bg-blue-500" : ""} ${isActive ? "opacity-50" : ""}`}
    >
      {children}
    </div>
  )
})
