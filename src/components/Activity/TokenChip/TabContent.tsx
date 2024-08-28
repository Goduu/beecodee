import React, { FC } from 'react'

type TabContentProps = {
    className?: string,
    onClick?: () => void
}
export const TabContent: FC<TabContentProps> = ({ onClick, className }) => {
    return (
        <span
            className={`w-14 text-center text-slate-50 text-opacity-10 ${className} `}
            onClick={onClick}
        >
            \t
        </span>
    );
}
