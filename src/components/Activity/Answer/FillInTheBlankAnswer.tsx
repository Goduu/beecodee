import { CodeOption, FillInTheBlankQuestion, GapOption, TextOption } from '@contentlayer/generated'
import React, { FC } from 'react'
import { AnswerStatus } from './types'
import { highlightCode, OptionWithTokens } from '@/components/TokenColors/highlightCode'
import { useFillInTheBlankAnswerStates } from './FillInTheBlankAnswer.states'
import { TokenGroupChip } from '../TokenGroupChip'
import { useLocaleContext } from '@/components/Localization/LocaleContext'
import { BeeLocale } from '@/components/Localization/localization'

type FillInTheBlankQuestionProps = {
    question: FillInTheBlankQuestion
    language: string
    setLessonState: (state: 'none' | 'correct' | 'wrong' | 'completed') => void
}

export const FillInTheBlankAnswer: FC<FillInTheBlankQuestionProps> = ({ question, language, setLessonState }) => {
    const {
        status,
        options,
        answer,
        removeTokenFromAnswer,
        addTokenToAnswer,
    } = useFillInTheBlankAnswerStates(question, language, setLessonState)
    const { locale } = useLocaleContext();
    const segments = question.segments;
    if (!segments) return null;

    const statusClass = getStatusClass(status);
    let gapCounter = -1;

    return (
        <div className='flex flex-col gap-16 px-2 items-center'>
            <div className={`flex rounded-xl border-2 sm:min-w-96 min-h-40 justify-center items-center drop-shadow-xl ${statusClass}`}>
                <div className='flex justify-start text-left px-2'>
                    <div>
                        {segments.map((segment, index) => { // Added index to map
                            if (segment.segment.type === 'CodeOption') {
                                return renderCodeSegment(segment.segment, language, locale, index);
                            }
                            if (segment.segment.type === 'TextOption') {
                                return renderTextSegment(segment.segment, locale, index);
                            }
                            gapCounter++;
                            return renderGapSegment(answer, gapCounter, segment.segment, removeTokenFromAnswer, index);
                        })}
                    </div>
                </div>
            </div>
            <div className='flex gap-4 justify-center flex-wrap'>
                {options.map((option, i) => (
                    <TokenGroupChip
                        id="option"
                        key={`tokenOption-${option.id}-${i}`}
                        onClick={() => addTokenToAnswer(option)}
                        optionWithToken={option}
                        className='px-2'
                    />
                ))}
            </div>
        </div>
    );
}

const renderCodeSegment = (segment: CodeOption, language: string, locale: BeeLocale, index: number) => { 
    const optionsWithToken = highlightCode(segment, language, locale);

    return (
        <TokenGroupChip id="segment" key={`codeSegment-${index}`} optionWithToken={optionsWithToken} className='px-2' />
    );
}

const renderTextSegment = (segment: TextOption, locale: BeeLocale, index: number) => { 
    return (
        <span key={`textSegment-${segment.id}-${index}`} className='text-xl font-extrabold flex-wrap'> 
            {segment.content[locale]}
        </span>
    );
}

const renderGapSegment = (
    answers: OptionWithTokens[],
    gapCounter: number,
    segment: GapOption,
    removeToken: (token: OptionWithTokens) => void,
    index: number // Added index parameter
) => {
    return (
        <span key={`gap-${segment.id}-${index}`} className="relative inline-block"> 
            {answers?.[gapCounter] && (
                <span className="absolute inset-0 flex justify-center items-center">
                    <TokenGroupChip id="gapSegmentFilled" onClick={() => removeToken(answers[gapCounter])} optionWithToken={answers[gapCounter]} className='py-0' />
                </span>
            )}
            <TokenGroupChip id="gapSegment" optionWithToken={answers?.[gapCounter] || { ...segment, status: 'neutral', tokens: [{ content: "", type: "gap" }] }} className='py-0' />
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
