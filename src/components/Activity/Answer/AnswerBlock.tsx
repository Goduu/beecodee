import React, { FC } from 'react'
import { TokenChip } from '../TokenChip'
import { Token } from '../../token_colors/highlightCode'
import { AnswerStatus } from '../types'

type AnswerBlockProps = {
    tokens: Token[]
    status: AnswerStatus
    removeToken: (token: Token) => void
}

export const AnswerBlock: FC<AnswerBlockProps> = ({ tokens, status, removeToken }) => {

    const statusClass = status === 'correct' ? 'border-green-500' : status === 'incorrect' ? 'border-red-600' : 'border-gray-500'

    return (
        <div>
            <div className={`flex flex-col border-2 rounded-xl min-w-96 min-h-40 justify-center drop-shadow-xl ${statusClass}`}>
                <div>
                    {tokens.map((token, index) => (
                        <TokenChip onClick={() => removeToken(token)} key={index} token={token} />
                    ))}
                </div>
            </div>
        </div>
    )
}
