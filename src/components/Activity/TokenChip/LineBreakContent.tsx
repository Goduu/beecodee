import React, { FC } from 'react'

type LineBreakContentProps = {
    className?: string,
    onClick?: () => void
}
export const LineBreakContent: FC<LineBreakContentProps> = ({ onClick, className }) => {
    return (
        <>
            <span onClick={onClick} className={`${className} text-slate-200 dark:text-slate-50 !text-opacity-10 `}>
                \n
            </span>
            <br />
        </>
    );
}
