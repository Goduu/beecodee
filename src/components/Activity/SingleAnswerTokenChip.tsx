import React, { FC } from 'react'
import { Token } from '../TokenColors/highlightCode'
import { TokenGroupWrapper } from './TokenGroupWrapper'
import { AnswerStatus } from './Answer/types'

type SingleAnswerTokenChipProps = {
    token: Token
    onClick?: () => void
    className?: string
    status: AnswerStatus
    selectedAnswer: Token[]
}

export const SingleAnswerTokenChip: FC<SingleAnswerTokenChipProps> = ({ token, onClick, className = "", status, selectedAnswer }) => {
    const isSelected = selectedAnswer.includes(token)
    const classStatus = isSelected ? status === 'neutral' ? "selected" : status : "neutral"

    return (
        <TokenGroupWrapper className={getStatusClass(classStatus)} tokenType={token.type} onClick={onClick}>
            {token.content}
        </TokenGroupWrapper>
    );
}

const getStatusClass = (status: AnswerStatus) => {
    switch (status) {
        case "selected":
            return "border-2 border-b-2 border-blue-500"
        case "correct":
            return "border-2 border-b-2 border-lime-500"
        case "wrong":
            return "border-2 border-b-2 border-red-500"
        default:
            return "border-2 border-b-4 border-gray-500"
    }
}