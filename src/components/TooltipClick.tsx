import React, { FC, ReactNode } from 'react'
export type TooltipClickProps = {
    content: ReactNode
    position?: "top" | "bottom"
    disabled?: boolean
    visible?: boolean
    children: ReactNode,
}
export const TooltipClick: FC<TooltipClickProps> = ({ children, position = "top", content, disabled = false, visible }) => {

    return (
        <div className={`relative flex justify-between`}>
            {children}
            <div className={`
                ${visible ? "scale-100" : "scale-0"} group-hover:opacity-100 
                transition duration-200 delay-150 ease-in-out
                absolute left-1/2 transform -translate-x-1/2 min-w-80
                ${position === "top" ? "bottom-full mb-1 sm:mb-2" : "top-full mt-1 sm:mt-2"}
                `}>
                <div className="bg-gray-300 dark:bg-gray-800 text-white text-s font-bold rounded-lg p-10">
                    {!disabled && content}
                </div>
            </div>
        </div>
    )
}
