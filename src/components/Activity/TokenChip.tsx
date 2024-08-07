import React, { FC } from 'react'
import { tokenTypeToTailwindClass } from '../token_colors/tokenToTailwindClass'
import { Token } from '../token_colors/highlightCode'

type TokenChipProps = {
    token: Token
    onClick?: () => void
}

export const TokenChip: FC<TokenChipProps> = ({ token, onClick }) => {
    if (token.content === "\n") {
        return <br />
    }

    return (
        <span
            onClick={onClick}
            className={`
                inline-block px-2 py-1 my-1 -mx-1 rounded-md 
                bg-gray-800
                shadow-md text-xl font-extrabold
                ${onClick && "cursor-pointer"}
                ${token.type ? tokenTypeToTailwindClass(token.type) : ''}
                `}
        >
            {token.type === 'gap' ? (
                <p className='text-opacity-0 text-red-50'>
                    {'_'.repeat(Number(token.content))}
                </p>
            ) : token.content}
        </span>
    );
}
