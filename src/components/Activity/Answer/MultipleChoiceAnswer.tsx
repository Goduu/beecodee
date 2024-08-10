import React, { FC } from 'react'
import { TokenChip } from '../TokenChip'
import { MultipleChoiceQuestion } from '@contentlayer/generated'
import { useAnswerStates } from './useAnswerStates'
import { CheckContinueButton } from './CheckContinueButton'
import { QuestionDescription } from './QuestionDescription'

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
        <div className='flex flex-col gap-10 sm:gap-16'>
            <QuestionDescription description={question.description} />
            <div className={`flex flex-col border-2 rounded-xl min-w-96 min-h-40 justify-center drop-shadow-xl ${statusClass}`}>
                <div>
                    {answer.map((token, index) => (
                        <TokenChip key={`tokenAnswer-${index}-${token.content}`} onClick={() => removeTokenFromAnswer(token)} token={token} className='px-2' />
                    ))}
                </div>
            </div>
            <div className='flex gap-4 justify-center flex-wrap'>
                {options.map((token, index) => (
                    <TokenChip key={`tokenOption-${index}-${token.content}`} used={answer.includes(token)} onClick={() => addTokenToAnswer(token)} token={token} className='px-2'
                    />
                ))}
            </div>
            <CheckContinueButton status={status} handleCheck={handleCheckStatus} handleGoToNextActivity={handleGoToNextActivity} />
        </div >
    )
}
