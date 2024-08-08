import { highlightCode, Token } from '@/components/token_colors/highlightCode'
import { CompleteCodeQuestion, Segment } from '@contentlayer/generated'
import React, { FC, Fragment } from 'react'
import { AnswerStatus } from '../types'
import { TokenChip } from '../TokenChip'
import { useAnswerStates } from './useAnswerStates'
import { CheckContinueButton } from './CheckContinueButton'

type CompleteCodeAnswerProps = {
    question: CompleteCodeQuestion
    language: string
    handleGoToNextActivity: () => void
}

export const CompleteCodeAnswer: FC<CompleteCodeAnswerProps> = ({ question, language, handleGoToNextActivity }) => {
    const {
        status,
        options,
        answer,
        handleCheckStatus,
        removeTokenFromAnswer,
        addTokenToAnswer,
    } = useAnswerStates(question, language)
    const segments = question.segments;

    if (!segments) return null;

    const statusClass = getStatusClass(status);
    let gapCounter = -1;

    return (
        <div className='flex flex-col gap-4'>
            <div className={`flex rounded-xl border-2 min-w-96 min-h-40 justify-center drop-shadow-xl ${statusClass}`}>
                <div>
                    {segments.map((segment, index) => {
                        if (segment.sType === 'text') {
                            return renderTextSegment(segment, index);
                        }
                        gapCounter++;
                        return renderGapSegment(answer, gapCounter, segment, index, removeTokenFromAnswer);
                    })}
                </div>
            </div>
            <div className='flex gap-4 justify-center flex-wrap'>
                {options.map((token, index) => (
                    <TokenChip onClick={() => addTokenToAnswer(token)} key={index} token={token}
                    />
                ))}
            </div>
            <CheckContinueButton status={status} handleCheck={handleCheckStatus} handleGoToNextActivity={handleGoToNextActivity} />
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
        case 'wrong':
            return 'border-red-600';
        default:
            return 'border-gray-500';
    }
}