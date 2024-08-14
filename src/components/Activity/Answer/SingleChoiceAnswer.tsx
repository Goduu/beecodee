import React, { FC } from 'react'
import { SingleChoiceQuestion } from '@contentlayer/generated'
import { CheckContinueButton } from './CheckContinueButton'
import { QuestionDescription } from './QuestionDescription'
import { useSingleChoiceAnswerStates } from './SingleChoiceAnswer.states'
import { TokenGroupChip } from '../TokenGroupChip'

type SingleChoiceAnswerProps = {
    question: SingleChoiceQuestion
    language: string
    handleGoToNextActivity: () => void
}

export const SingleChoiceAnswer: FC<SingleChoiceAnswerProps> = ({ question, language, handleGoToNextActivity }) => {
    const { isAnswerCorrect, selectAnswer, answer, options, handleCheckStatus } = useSingleChoiceAnswerStates(question, language)

    return (
        <div className='flex flex-col gap-16 items-center'>
            <QuestionDescription description={question.description} />
            <div className='flex flex-col gap-4 justify-center flex-wrap min-w-48'>
                {options.map((token, index) => (
                    <TokenGroupChip
                        onClick={() => selectAnswer(token)}
                        key={index}
                        tokenGroup={token}
                    />
                ))}
            </div>

            <CheckContinueButton
                isAnswerCorrect={isAnswerCorrect}
                handleCheck={handleCheckStatus}
                handleGoToNextActivity={handleGoToNextActivity}
            />
        </div>
    );
}
