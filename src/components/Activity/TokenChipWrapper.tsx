import { FC, ReactNode } from 'react'
import { tokenTypeToTailwindClass } from '../token_colors/tokenToTailwindClass'


type TokenWrapperProps = {
    children: ReactNode,
    onClick?: () => void,
    className?: string
    tokenType?: string | null
    used?: boolean
}
export const TokenWrapper: FC<TokenWrapperProps> = ({ children, tokenType, onClick, className, used }) => {

    const getClassNames = () => {
        return `
            inline-block py-1 rounded-md
            bg-gray-800 text-xl font-extrabold
            ${onClick ? 'cursor-pointer' : ''}
            ${tokenType ? tokenTypeToTailwindClass(tokenType) : ''}
            ${used && "text-red-50 text-opacity-0 bg-gray-500"}
            ${className}
        `;
    };

    return (
        <span onClick={onClick} className={getClassNames()}>
            {children}
        </span>
    );
}