import React, { FC } from 'react'
import { tokenTypeToTailwindClass } from '../token_colors/tokenToTailwindClass'
import { Token } from '../token_colors/highlightCode'

type TokenChipProps = {
    token: Token
    onClick?: () => void
}

export const TokenChip: FC<TokenChipProps> = ({ token, onClick }) => {
    return (
        <span
            onClick={onClick}
            className={`
                inline-block px-2 py-1 my-1 rounded-md 
                bg-gray-800 bg-opacity-90
                shadow-md text-xl font-extrabold
                cursor-pointer
                ${token.type ? tokenTypeToTailwindClass(token.type) : ''}
                `}
        >
            {token.content}
        </span>
    );
}
