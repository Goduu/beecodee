import { FC, ReactNode } from 'react'
import { tokenTypeToTailwindClass } from '../TokenColors/tokenToTailwindClass'


type TokenGroupWrapperProps = {
    children: ReactNode,
    onClick?: () => void,
    className?: string
    tokenType?: string | null
    used?: boolean
}
export const TokenGroupWrapper: FC<TokenGroupWrapperProps> = ({ children, tokenType, onClick, className, used }) => {

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

    return (
        <span onClick={handleClick} className={getClassNames()}>
            {children}
        </span>
    );
}