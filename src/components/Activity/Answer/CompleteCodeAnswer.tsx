import { highlightCode, Token, tokenizeCode } from '@/components/token_colors/highlightCode'
import { Segment } from '@contentlayer/generated'
import React, { FC, Fragment } from 'react'
import { AnswerStatus } from '../types'
import { TokenChip } from '../TokenChip'

type CompleteCodeAnswerProps = {
    tokens: Token[],
    segments?: Segment[],
    status: AnswerStatus,
    removeToken: (token: Token) => void
}

export const CompleteCodeAnswer: FC<CompleteCodeAnswerProps> = ({ tokens, segments, status, removeToken }) => {
    if (!segments) return null;

    const statusClass = getStatusClass(status);
    let gapCounter = -1;

    return (
        <div className={`flex rounded-xl border-2 min-w-96 min-h-40 justify-center drop-shadow-xl ${statusClass}`}>
            <div>
                {segments.map((segment, index) => {
                    if (segment.sType === 'text') {
                        return renderTextSegment(segment, index);
                    }
                    gapCounter++;
                    return renderGapSegment(tokens, gapCounter, segment, index, removeToken);
                })}
            </div>
        </div>
    );
}

const renderTextSegment = (segment: Segment, index: number) => {
    const tokenizedCode = highlightCode(segment.content, "javascript");
    return (
        <Fragment key={`text-${index}`}>
            {tokenizedCode.map((token, i) => (
                <TokenChip key={`${token.content}-${index}-${i}`} token={token} />
            ))}
        </Fragment>
    );
}

const renderGapSegment = (tokens: Token[], gapCounter: number, segment: Segment, index: number, removeToken: (token: Token) => void) => {
    return (
        <Fragment key={`gap-${index}`}>
            {tokens?.[gapCounter] && (
                <span className='absolute'>
                    <TokenChip onClick={() => removeToken(tokens[gapCounter])} token={tokens[gapCounter]} />
                </span>
            )}
            <TokenChip token={{ type: "gap", content: segment.content }} />
        </Fragment>
    );
}

const getStatusClass = (status: AnswerStatus): string => {
    switch (status) {
        case 'correct':
            return 'border-green-500';
        case 'incorrect':
            return 'border-red-600';
        default:
            return 'border-gray-500';
    }
}