import { FC, ReactNode } from 'react'
import { tokenTypeToTailwindClass } from '../TokenColors/tokenToTailwindClass'


type TokenChipWrapperProps = {
    children: ReactNode,
    onClick?: () => void,
    className?: string
    tokenType?: string | null
    used?: boolean
}
export const TokenChipWrapper: FC<TokenChipWrapperProps> = ({ children, tokenType, onClick, className, used }) => {

    const getClassNames = () => {
        return `
            inline-block py-1 rounded-md
            bg-gray-300 dark:bg-gray-800 text-xl font-extrabold
            ${!used && onClick ? 'cursor-pointer' : ''}
            ${tokenType ? tokenTypeToTailwindClass(tokenType) : ''}
            ${used && "text-red-50 text-opacity-0 bg-gray-200 dark:bg-gray-500"}
            ${className}
        `;
    };

    const handleClick = () => {
        !used && onClick && onClick();
    }

    const renderChildren = () => {
        if (typeof children === 'string') {
            if (children === '\n') {
                return <>
                    <span className={` text-opacity-10 text-slate-50 ${getClassNames()}`} onClick={() => handleClick()}>\n</span>
                    <br />
                </>
            }
            if (children === '\t') {
                return <>
                    <span className={`w-14 text-center text-opacity-10 text-slate-50 ${getClassNames()}`} onClick={() => handleClick()}>\t</span>
                </>
            }
            return (
                <span
                    onClick={() => handleClick()}
                    className={getClassNames()}
                >
                    {children}
                </span>
            );
        }
        return (
            <span
                onClick={() => handleClick()}
                className={getClassNames()}
            >
                {children}
            </span>)
    };

    return (
        renderChildren()
    );
}