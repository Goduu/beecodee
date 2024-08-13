import React, { FC } from 'react'
import { LuCheckCircle } from '../Icons'

type PathWayCompleteButtonProps = {
    size?: 'small' | 'medium' | 'large'
    onClick?: () => void
}

export const PathWayCompleteButton: FC<PathWayCompleteButtonProps> = ({ size = "medium", onClick }) => {
    const dimensions = size === "medium" ? "w-28 h-28" : size === "small" ? "w-20 h-20" : "w-40 h-40"
    const iconDimensions = size === "medium" ? "w-16" : size === "small" ? "w-12" : "w-20"

    return (
        <div className={`
                border-b-8 border-green-600
                rounded-full flex justify-center 
                cursor-pointer hover:scale-105 hover:border-b-2 duration-300
                bg-green-500 ${dimensions}`}
            onClick={onClick}
        >
            <LuCheckCircle className={iconDimensions} />
        </div>
    )
}
