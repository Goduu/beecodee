import React, { FC } from 'react'
import { TokenChip } from '../TokenChip'
import { MultipleChoiceQuestion } from '@contentlayer/generated'
import { useAnswerStates } from './useAnswerStates'
import { CheckContinueButton } from './CheckContinueButton'

type MultipleChoiceAnswerProps = {
    question: MultipleChoiceQuestion
    language: string
    handleGoToNextActivity: () => void
}

export const MultipleChoiceAnswer: FC<MultipleChoiceAnswerProps> = ({ question, language, handleGoToNextActivity }) => {
    const {
        status,
        options,
        answer,
        handleCheckStatus,
        addTokenToAnswer,
        removeTokenFromAnswer,
    } = useAnswerStates(question, language)


    const statusClass = status === 'correct' ? 'border-green-500' : status === 'wrong' ? 'border-red-600' : 'border-gray-500'

    return (
        <div className='flex flex-col gap-4'>
            <div className={`flex flex-col border-2 rounded-xl min-w-96 min-h-40 justify-center drop-shadow-xl ${statusClass}`}>
                <div>
                    {answer.map((token, index) => (
                        <TokenChip onClick={() => removeTokenFromAnswer(token)} key={index} token={token} />
                    ))}
                </div>
            </div>
            <div className='flex gap-4 justify-center flex-wrap'>
                {options.map((token, index) => (
                    <TokenChip onClick={() => addTokenToAnswer(token)} key={index} token={token}
                    />
                ))}
            </div>
            <CheckContinueButton status={status} handleCheck={handleCheckStatus} handleGoToNextActivity={handleGoToNextActivity} />
        </div >
    )
}
