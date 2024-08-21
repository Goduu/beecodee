import React, { FC } from 'react'
import { TokenGroupWrapper } from './TokenGroupWrapper'
import { AnswerStatus, TokenGroup } from './Answer/types'
import { tokenTypeToTailwindClass } from '../TokenColors/tokenToTailwindClass'

type TokenGroupChipProps = {
    tokenGroup: TokenGroup
    className?: string
    onClick?: () => void
}

export const TokenGroupChip: FC<TokenGroupChipProps> = ({ tokenGroup, onClick, className = "" }) => {

    return (
        <TokenGroupWrapper className={`${getStatusClass(tokenGroup.status)} transition duration-500 px-2`} onClick={onClick}>
            {tokenGroup.tokens.map((token, index) => (
                <span key={index} className={tokenTypeToTailwindClass(token.type)}>{token.content}</span>
            ))}
        </TokenGroupWrapper>
    );
}

const getStatusClass = (status: AnswerStatus) => {
    switch (status) {
        case "selected":
            return "border-2 border-b-2 border-blue-500 mt-[2px]"
        case "correct":
            return "border-2 border-b-2 border-lime-500 mt-[2px]"
        case "wrong":
            return "border-2 border-b-2 border-red-500 mt-[2px]"
        case "used":
            return "border-2 border-b-2 border-gray-800"
        case "filled":
            return "border-0"
        default:
            return "border-2 border-b-4 border-gray-500"
    }
}