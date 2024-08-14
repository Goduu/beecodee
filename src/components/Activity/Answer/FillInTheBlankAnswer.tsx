import { FillInTheBlankQuestion, Segment } from '@contentlayer/generated'
import React, { FC } from 'react'
import { AnswerStatus, TokenGroup } from './types'
import { TokenChip } from '../TokenChip'
import { CheckContinueButton } from './CheckContinueButton'
import { QuestionDescription } from './QuestionDescription'
import { TokenText } from '../TokenText'
import { highlightCode } from '@/components/TokenColors/highlightCode'
import { useFillInTheBlankAnswerStates } from './FillInTheBlankAnswer.states'
import { TokenGroupChip } from '../TokenGroupChip'

type FillInTheBlankQuestionProps = {
    question: FillInTheBlankQuestion
    language: string
    handleGoToNextActivity: () => void
}

export const FillInTheBlankAnswer: FC<FillInTheBlankQuestionProps> = ({ question, language, handleGoToNextActivity }) => {
    const {
        status,
        options,
        answer,
        handleCheckStatus,
        removeTokenFromAnswer,
        addTokenToAnswer,
    } = useFillInTheBlankAnswerStates(question, language)
    const segments = question.segments;
    if (!segments) return null;

    const statusClass = getStatusClass(status);
    let gapCounter = -1;

    return (
        <div className='flex flex-col gap-16 px-2'>
            <QuestionDescription description={question.description} />
            <div className={`flex rounded-xl border-2 sm:min-w-96 min-h-40 justify-center items-center drop-shadow-xl ${statusClass}`}>
                <div className='flex justify-start text-left px-2'>
                    <div>
                        {segments.map((segment, index) => {
                            if (segment.sType === 'code') {
                                return renderCodeSegment(segment, language);
                            }
                            if (segment.sType === 'text') {
                                return renderTextSegment(segment);
                            }
                            gapCounter++;
                            return renderGapSegment(answer, gapCounter, segment, removeTokenFromAnswer, index);
                        })}
                    </div>
                </div>
            </div>
            <div className='flex gap-4 justify-center flex-wrap' >
                {options.map((token, i) => (
                    <TokenGroupChip
                        key={`token-option-${token.status}-${i}`}
                        onClick={() => addTokenToAnswer(token)}
                        tokenGroup={token}
                        className={`px-2`}
                    />
                ))}
            </div>
            <CheckContinueButton isAnswerCorrect={status==="correct"} handleCheck={handleCheckStatus} handleGoToNextActivity={handleGoToNextActivity} />
        </div>
    );
}

const renderCodeSegment = (segment: Segment, language: string) => {
    const tokenizedCode = highlightCode(segment.content, language);

    return (
        <span key={`code-segment-${segment.content}`}>
            {tokenizedCode.map((token, i) => (
                <TokenText key={`code-segment-${i}-${token.content}`} token={token} />
            ))}
        </span>
    );
}

const renderTextSegment = (segment: Segment) => {
    return (
        <span key={`text-segment-${segment.content}`} className='text-xl font-extrabold flex-wrap'>
            {segment.content}
        </span>
    );
}

const renderGapSegment = (
    tokens: TokenGroup[],
    gapCounter: number,
    segment: Segment,
    removeToken: (token: TokenGroup) => void,
    index: number
) => {
    return (
        <span key={`gap-${segment.content}${index}`} className="relative inline-block">
            {tokens?.[gapCounter] && (
                <span className="absolute inset-0 flex justify-center items-center">
                    <TokenGroupChip onClick={() => removeToken(tokens[gapCounter])} tokenGroup={tokens[gapCounter]} className='py-0' />
                </span>
            )}
            <TokenChip token={{ type: "gap", content: segment.content }} />
        </span>
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