import { CodeOption, FillInTheBlankQuestion, GapOption, TextOption } from '@contentlayer/generated'
import React, { FC } from 'react'
import { AnswerStatus } from './types'
import { CheckContinueButton } from './CheckContinueButton'
import { QuestionDescription } from './QuestionDescription'
import { highlightCode, OptionWithTokens } from '@/components/TokenColors/highlightCode'
import { useFillInTheBlankAnswerStates } from './FillInTheBlankAnswer.states'
import { TokenGroupChip } from '../TokenGroupChip'
import { useLocaleContext } from '@/components/Localization/LocaleContext'
import { BeeLocale } from '@/components/Localization/localization'

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
    const { locale } = useLocaleContext();
    const segments = question.segments;
    if (!segments) return null;

    const statusClass = getStatusClass(status);
    let gapCounter = -1;

    return (
        <div className='flex flex-col gap-16 px-2 items-center'>
            <QuestionDescription description={question.description[locale]} />
            <div className={`flex rounded-xl border-2 sm:min-w-96 min-h-40 justify-center items-center drop-shadow-xl ${statusClass}`}>
                <div className='flex justify-start text-left px-2'>
                    <div>
                        {segments.map((segment, index) => {
                            if (segment.segment.type === 'CodeOption') {
                                return renderCodeSegment(segment.segment, language, locale);
                            }
                            if (segment.segment.type === 'TextOption') {
                                return renderTextSegment(segment.segment, locale);
                            }
                            gapCounter++;
                            return renderGapSegment(answer, gapCounter, segment.segment, removeTokenFromAnswer, index);
                        })}
                    </div>
                </div>
            </div>
            <div className='flex gap-4 justify-center flex-wrap' >
                {options.map((option, i) => (
                    <TokenGroupChip
                        key={`token-option-${option.status}-${i}`}
                        onClick={() => addTokenToAnswer(option)}
                        optionWithToken={option}
                        className={`px-2`}
                    />
                ))}
            </div>
            <CheckContinueButton isAnswerCorrect={status === "correct"} handleCheck={handleCheckStatus} handleGoToNextActivity={handleGoToNextActivity} />
        </div>
    );
}

const renderCodeSegment = (segment: CodeOption, language: string, locale: BeeLocale) => {
    const optionsWithToken = highlightCode(segment, language, locale);

    return (
        <TokenGroupChip optionWithToken={optionsWithToken} className='px-2' />
    );
}

const renderTextSegment = (segment: TextOption, locale: BeeLocale) => {
    return (
        <span key={`text-segment-${segment.content}`} className='text-xl font-extrabold flex-wrap'>
            {segment.content[locale]}
        </span>
    );
}

const renderGapSegment = (
    answers: OptionWithTokens[],
    gapCounter: number,
    segment: GapOption,
    removeToken: (token: OptionWithTokens) => void,
    index: number
) => {
    return (
        <span key={`gap-${segment.size}${index}`} className="relative inline-block">
            {answers?.[gapCounter] && (
                <span className="absolute inset-0 flex justify-center items-center">
                    <TokenGroupChip onClick={() => removeToken(answers[gapCounter])} optionWithToken={answers[gapCounter]} className='py-0' />
                </span>
            )}
            <TokenGroupChip optionWithToken={answers?.[gapCounter] || { ...segment, status: 'neutral', tokens: [{ content: "", type: "gap" }] }} className='py-0' />
        </span>

    );
}

const getStatusClass = (status: AnswerStatus): string => {
    switch (status) {
        case 'correct':
            return 'border-lime-500';
        case 'wrong':
            return 'border-red-600';
        default:
            return 'border-gray-500';
    }
}