import { highlightCode, Token, tokenizeCode } from '@/components/token_colors/highlightCode'
import { Segment } from '@contentlayer/generated'
import React, { FC } from 'react'
import { AnswerStatus } from '../types'
import { TokenChip } from '../TokenChip'

type CompleteCodeAnswerProps = {
    tokens: Token[],
    segments?: Segment[],
    status: AnswerStatus,
    removeToken: (token: Token) => void
}

export const CompleteCodeAnswer: FC<CompleteCodeAnswerProps> = ({ tokens, segments, status, removeToken }) => {
    if (!segments) {
        return
    }

    const statusClass = status === 'correct' ? 'border-green-500' : status === 'incorrect' ? 'border-red-600' : 'border-gray-500'
    let gapCounter = -1
    return (
        <div className={`flex rounded-xl border-2 min-w-96 min-h-40 justify-center drop-shadow-xl ${statusClass}`}>
            <div>
                {segments.map((segment, index) => {
                    const segmentType = segment.sType

                    if (segmentType === 'text') {
                        const tokenizedCode = highlightCode(segment.content, "javascript");
                        console.log("tokenizedCode", tokenizedCode)
                        return (
                            < >
                                {tokenizedCode.map((token, i) => (
                                    <TokenChip key={token.content + index} token={token} />
                                ))}
                            </>
                        )
                    }
                    gapCounter++
                    return (
                        <>
                            {tokens?.[gapCounter] &&
                                <span className='absolute'>
                                    <TokenChip onClick={() => removeToken(tokens[gapCounter])} token={tokens[gapCounter]} />
                                </span>
                            }
                            <TokenChip token={{ type: "gap", content: segment.content }} />
                        </>
                    );

                })}
            </div>
        </div>
    )
}
