import { FC, ReactNode } from 'react'
import { tokenTypeToTailwindClass } from '../token_colors/tokenToTailwindClass'


type TokenWrapperProps = {
    children: ReactNode,
    onClick?: () => void,
    className?: string
    tokenType?: string | null
}
export const TokenWrapper: FC<TokenWrapperProps> = ({ children, tokenType, onClick, className }) => {

    const getClassNames = () => {
        return `
            inline-block py-1 my-1 rounded-md 
            bg-gray-800 text-xl font-extrabold
            ${onClick ? 'cursor-pointer' : ''}
            ${tokenType ? tokenTypeToTailwindClass(tokenType) : ''}
            ${className}
        `;
    };

    return (
        <span onClick={onClick} className={getClassNames()}>
            {children}
        </span>
    );
}