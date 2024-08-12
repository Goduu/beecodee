import React, { FC } from 'react'
import { SingleChoiceQuestion } from '@contentlayer/generated'
import { useAnswerStates } from './useAnswerStates'
import { CheckContinueButton } from './CheckContinueButton'
import { QuestionDescription } from './QuestionDescription'
import { SingleAnswerTokenChip } from '../SingleAnswerTokenChip'

type SingleChoiceAnswerProps = {
    question: SingleChoiceQuestion
    language: string
    handleGoToNextActivity: () => void
}

export const SingleChoiceAnswer: FC<SingleChoiceAnswerProps> = ({ question, language, handleGoToNextActivity }) => {
    const {
        status,
        options,
        answer,
        addTokenToAnswer,
        handleCheckStatus,
    } = useAnswerStates(question, language)

    return (
        <div className='flex flex-col gap-16 items-center'>
            <QuestionDescription description={question.description} />
            <div className='flex flex-col gap-4 justify-center flex-wrap min-w-48'>
                {options.map((token, index) => (
                    <SingleAnswerTokenChip
                        onClick={() => addTokenToAnswer(token)}
                        key={token.content}
                        token={token}
                        selectedAnswer={answer}
                        status={status}
                    />
                ))}
            </div>

            <CheckContinueButton
                status={status}
                handleCheck={handleCheckStatus}
                handleGoToNextActivity={handleGoToNextActivity}
            />
        </div>
    );
}
