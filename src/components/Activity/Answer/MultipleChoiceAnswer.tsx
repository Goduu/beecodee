import React, { FC } from 'react'
import { MultipleChoiceQuestion } from '@contentlayer/generated'
import { useMultipleChoiceAnswerStates } from './MultipleChoiceAnswer.states'
import { TokenGroupChip } from '../TokenGroupChip'
import { OptionWithTokens } from '@/components/TokenColors/highlightCode'

type MultipleChoiceAnswerProps = {
    question: MultipleChoiceQuestion
    language: string
    setLessonState: (state: 'none' | 'correct' | 'wrong' | 'completed') => void
}

export const MultipleChoiceAnswer: FC<MultipleChoiceAnswerProps> = ({ question, language, setLessonState }) => {
    const {
        status,
        options,
        answer,
        addTokenToAnswer,
        removeOptionFromAnswer,
    } = useMultipleChoiceAnswerStates(question, language, setLessonState)

    const statusClass = status === 'correct' ? 'border-lime-500' : status === 'wrong' ? 'border-red-600' : 'border-gray-500'

    return (
        <div className='flex flex-col gap-10 sm:gap-16 items-center'>
            <div className='flex gap-2 w-full min-h-40'>
                <div className={`flex flex-col border-2 rounded-xl w-full justify-center drop-shadow-xl ${statusClass}`}>
                    <div className='inline-block text-start px-1'>
                        {answer.map((optionWithToken, index) => (
                            <TokenGroupChip id="answer" key={`answer-${optionWithToken.id}`} onClick={() => removeOptionFromAnswer(optionWithToken)} optionWithToken={optionWithToken} className='px-2' />
                        ))}
                    </div>
                </div>
                <div className='w-1/6 flex flex-col gap-1'>
                    <span className='border rounded-3xl items-center text-center cursor-pointer' onClick={() => addTokenToAnswer(createFormattingToken('\t'))}>
                        Tab
                    </span>
                    <span className='border rounded-3xl items-center text-center cursor-pointer' onClick={() => addTokenToAnswer(createFormattingToken('\n'))}>
                        Enter
                    </span>
                    <span className='border rounded-3xl items-center text-center cursor-pointer' onClick={() => addTokenToAnswer(createFormattingToken(' '))}>
                        Space
                    </span>
                </div >
            </div >
            <div className='flex gap-4 justify-center flex-wrap'>
                {options.map((option) => (
                    <TokenGroupChip id="option" key={option.id} optionWithToken={option} onClick={() => addTokenToAnswer(option)} className='px-2' />
                ))}
            </div>
        </div >
    )
}

const createFormattingToken = (content: string): OptionWithTokens => {
    return {
        id: content === '\t' ? 'ft' : content === '\n' ? 'fn' : 'fs',
        content: content,
        type: "TextOption",
        tokens: [{ content, type: 'format' }]
    }
}