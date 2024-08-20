import React, { FC } from 'react'
import { IoMdFlower } from '../Svgs/Icons'

type PathwayButtonProps = {
    size?: 'small' | 'medium' | 'large'
    onClick?: () => void
}
export const PathwayButton: FC<PathwayButtonProps> = ({ size="medium", onClick }) => {
    const dimensions = size === "medium" ? "w-18 h-18" : size === "small" ? "w-16 h-16" : "w-24 h-24"
    const iconDimensions = size === "medium" ? "w-14" : size === "small" ? "w-12" : "w-16"

    return (
        <div
            className={`
                border-b-8 border-gray-900
                rounded-full flex items-center justify-center 
                cursor-pointer hover:scale-105 hover:border-b-2 duration-300
                bg-gray-200 dark:bg-gray-800 ${dimensions}`}
            onClick={onClick}
        >
            <IoMdFlower className={iconDimensions} />
        </div>
    )
}
