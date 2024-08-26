import { FC, ReactNode } from "react"

export type TooltipHoverProps = {
  text: string
  position?: "top" | "bottom"
  disabled?: boolean
  children: ReactNode
}

export const TooltipHover: FC<TooltipHoverProps> = ({ children, position = "top", text, disabled = false }) => {
  return (
    <div className={`${disabled ? "" : "group"} relative flex w-fit justify-between `}>
      <div className="z-0">{children}</div>
      <div
        className={`
                absolute left-1/2 z-50
                -translate-x-1/2 transform opacity-0 transition
                delay-150 duration-200 ease-in-out group-hover:opacity-100
                ${position === "top" ? "bottom-full mb-1 sm:mb-2" : "top-full mt-1 sm:mt-2"}
                `}
      >
        {position === "bottom" && ArrowBottom}
        <div className="text-s w-full items-center rounded-lg bg-gray-300 p-2 font-bold text-white dark:bg-gray-800">
          {!disabled && text}
        </div>
        {position === "top" && ArrowTop}
      </div>
    </div>
  )
}

const ArrowBottom = (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 6"
    xmlns="http://www.w3.org/2000/svg"
    className={`absolute left-1/2 -mt-2 -translate-x-1/2 transform text-gray-800`}
  >
    <path fill="currentColor" d="M1 7C1.5 5 3 3 6 1C9 3 10.5 5 11 7H1Z" />
  </svg>
)

const ArrowTop = (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 6"
    xmlns="http://www.w3.org/2000/svg"
    className={`absolute left-1/2 -mt-[2px] -translate-x-1/2 transform overflow-visible text-gray-800`}
  >
    <path fill="currentColor" d="M1 1C1.5 3 3 5 6 7C9 5 10.5 3 11 1H1Z" />
  </svg>
)
