import React, { FC, ReactNode } from "react"
export type TooltipClickProps = {
  content: ReactNode
  position?: "top" | "bottom"
  disabled?: boolean
  visible?: boolean
  children: ReactNode
}
export const TooltipClick: FC<TooltipClickProps> = ({
  children,
  position = "top",
  content,
  disabled = false,
  visible,
}) => {
  return (
    <div className={`relative flex justify-between`}>
      {children}
      <div
        className={`
                ${visible ? "scale-100" : "scale-0"} absolute left-1/2
                z-20 min-w-80 -translate-x-1/2 transform
                transition delay-150 duration-200 ease-in-out group-hover:opacity-100
                ${position === "top" ? "bottom-full mb-1 sm:mb-2" : "top-full mt-1 sm:mt-2"}
                `}
      >
        <div className="text-s rounded-lg bg-gray-50 p-10 font-bold dark:bg-gray-800">{!disabled && content}</div>
      </div>
    </div>
  )
}
