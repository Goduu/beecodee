import React, { FC } from 'react'
import { SingleChoiceQuestion } from '@contentlayer/generated'
import { CheckContinueButton } from './CheckContinueButton'
import { QuestionDescription } from './QuestionDescription'
import { useSingleChoiceAnswerStates } from './SingleChoiceAnswer.states'
import { TokenGroupChip } from '../TokenGroupChip'
import { useLocaleContext } from '@/components/Localization/LocaleContext'

type SingleChoiceAnswerProps = {
    question: SingleChoiceQuestion
    language: string
    handleGoToNextActivity: () => void
}

export const SingleChoiceAnswer: FC<SingleChoiceAnswerProps> = ({ question, language, handleGoToNextActivity }) => {
    const { locale } = useLocaleContext();
    const { isAnswerCorrect, selectAnswer, answer, options, handleCheckStatus } = useSingleChoiceAnswerStates(question, language)

    return (
        <div className='flex flex-col gap-16 items-center'>
            <QuestionDescription description={question.description[locale]} />
            <div className='flex flex-col gap-4 justify-center flex-wrap min-w-48'>
                {options.map((option, index) => (
                    <div className='flex'>
                        <TokenGroupChip
                            onClick={() => selectAnswer(option)}
                            key={index}
                            optionWithToken={option}
                            isOneLined={true}
                        />
                    </div>
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
