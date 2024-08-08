import React, { FC } from 'react'
import { SingleChoiceQuestion } from '@contentlayer/generated'
import { TokenChip } from '../TokenChip'
import { useAnswerStates } from './useAnswerStates'
import { CheckContinueButton } from './CheckContinueButton'

type AnswerStatus = "selected" | "neutral" | "correct" | "wrong"

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

    const statusClass = (status: AnswerStatus) => {
        switch (status) {
            case "selected":
                return "bg-blue-500"
            case "correct":
                return "bg-green-500"
            case "wrong":
                return "bg-red-500"
            default:
                return ""
        }
    }


    return (
        <div className='flex flex-col gap-16 items-center'>
            <div className='text-xl sm:text-2xl font-extrabold flex-wrap'>
                {question.description}
            </div>
            <div className='flex flex-col gap-4 justify-center flex-wrap min-w-48'>
                {options.map((token, index) => (
                    <TokenChip onClick={() => addTokenToAnswer(token)} key={token.content} token={token}
                        className={statusClass(answer.includes(token) ? status !== "neutral" ? status : "selected" : "neutral")} />
                ))}
            </div>
            <CheckContinueButton status={status} handleCheck={handleCheckStatus} handleGoToNextActivity={handleGoToNextActivity} />
        </div>
    )
}
