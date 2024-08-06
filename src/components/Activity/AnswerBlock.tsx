import React, { FC } from 'react'
import { TokenChip } from './TokenChip'
import { Token } from '../token_colors/highlightCode'
import { AnswerStatus } from './types'

type AnswerBlockProps = {
    tokens: Token[]
    status: AnswerStatus
    removeToken: (token: Token) => void
}

export const AnswerBlock: FC<AnswerBlockProps> = ({ tokens, status, removeToken }) => {

    const statusClass = status === 'correct' ? 'border-green-500' : status === 'incorrect' ? 'border-red-600' : 'border-gray-500'

    return (
        <div className={`border-2 rounded-xl p-10 drop-shadow-xl bg-cyan-900 ${statusClass}`}>
            {tokens.map((token, index) => (
                <TokenChip onClick={() => removeToken(token)} key={index} token={token} />
            ))}
        </div>
    )
}
