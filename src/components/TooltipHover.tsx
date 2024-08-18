import { FC, ReactNode } from 'react'

export type TooltipHoverProps = {
    text: string
    position?: "top" | "bottom"
    disabled?: boolean
    children: ReactNode,
}

export const TooltipHover: FC<TooltipHoverProps> = ({ children, position = "top", text, disabled = false }) => {

    return (
        <div className={`${disabled ? "" : "group"} relative flex justify-between w-fit `}>
            <div className='z-0'>
                {children}
            </div>
            <div className={`
                opacity-0 group-hover:opacity-100 z-50
                transition duration-200 delay-150 ease-in-out
                absolute left-1/2 transform -translate-x-1/2
                ${position === "top" ? "bottom-full mb-1 sm:mb-2" : "top-full mt-1 sm:mt-2"}
                `}>
                {position === "bottom" && ArrowBottom}
                <div className="bg-gray-800 text-white text-s font-bold rounded-lg p-2 w-full items-center">
                    {!disabled && text}
                </div>
                {position === "top" && ArrowTop}
            </div>
        </div>
    )
}

const ArrowBottom = <svg
    width="12"
    height="8"
    viewBox="0 0 12 6"
    xmlns="http://www.w3.org/2000/svg"
    className={`text-gray-800 absolute left-1/2 transform -translate-x-1/2 -mt-2`}
>
    <path
        fill="currentColor"
        d="M1 7C1.5 5 3 3 6 1C9 3 10.5 5 11 7H1Z"
    />
</svg>

const ArrowTop = <svg
    width="12"
    height="8"
    viewBox="0 0 12 6"
    xmlns="http://www.w3.org/2000/svg"
    className={`text-gray-800 absolute left-1/2 transform -translate-x-1/2 overflow-visible -mt-[2px]`}

>
    <path
        fill="currentColor"
        d="M1 1C1.5 3 3 5 6 7C9 5 10.5 3 11 1H1Z"
    />
</svg>