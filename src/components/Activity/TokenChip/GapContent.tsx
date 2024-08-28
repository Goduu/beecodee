import React, { FC } from 'react'
import { Token } from '@/components/TokenColors/highlightCode'
import { tokenTypeToTailwindClass } from '@/components/TokenColors/tokenToTailwindClass'

type GapContentProps = {
    token: Token, onClick?: () => void
}
export const GapContent: FC<GapContentProps> = ({ token, onClick }) => {
    const tokenTypeClass = tokenTypeToTailwindClass(token.type)

    return (
        <span
            onClick={token.content ? onClick : undefined}
            className={`text-slate-50 text-opacity-0 rounded-md h-full py-1 ${tokenTypeClass} `}
        >
            {token.content ?
                <span
                    onClick={onClick}
                    className={tokenTypeClass}
                >
                    {token.content.toString().replace(/ /g, "\u00A0")}
                </span>

                : "_".repeat(Number(token.size))}
        </span>
    );
}
