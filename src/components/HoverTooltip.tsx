import React, { FC, ReactNode } from 'react'
export type HoverTooltipProps = {
    text: string
    position?: "top" | "bottom"
    disabled?: boolean
    children: ReactNode,
}
export const HoverTooltip: FC<HoverTooltipProps> = ({ children, position = "top", text, disabled=false }) => {

    return (
        <div className={`${disabled ? "" : "group"} relative flex justify-between w-fit `}>
            {children}
            <div className={`
                opacity-0 group-hover:opacity-100 
                transition duration-200 delay-150 ease-in-out
                absolute left-1/2 transform -translate-x-1/2
                ${position === "top" ? "bottom-full mb-1 sm:mb-2" : "top-full mt-1 sm:mt-2"}
                `}>
                <div className="bg-gray-800 text-white text-s font-bold rounded-lg p-2 w-full items-center">
                    {!disabled && text}
                </div>
            </div>
        </div>
    )
}
