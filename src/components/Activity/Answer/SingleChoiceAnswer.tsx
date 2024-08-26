import React, { FC } from 'react'
import { SingleChoiceQuestion } from '@contentlayer/generated'
import { useSingleChoiceAnswerStates } from './SingleChoiceAnswer.states'
import { TokenGroupChip } from '../TokenGroupChip'

type SingleChoiceAnswerProps = {
    question: SingleChoiceQuestion
    language: string
    setLessonState: (state: 'none' | 'correct' | 'wrong' | 'completed') => void
}

export const SingleChoiceAnswer: FC<SingleChoiceAnswerProps> = ({ question, language, setLessonState }) => {
    const { selectAnswer, options } = useSingleChoiceAnswerStates(question, language, setLessonState)

    return (
        <div className='flex flex-col gap-16 items-center'>
            <div className='flex flex-col gap-4 justify-center flex-wrap min-w-48'>
                {options.map((option, index) => (
                    <div className='flex' key={option.id}>
                        <TokenGroupChip
                            id="option"
                            onClick={() => selectAnswer(option)}
                            key={index}
                            optionWithToken={option}
                            isOneLined={true}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}