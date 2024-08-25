import React, { FC } from 'react'
import { CodeOutputQuestion } from '@contentlayer/generated'
import { CheckContinueButton } from './CheckContinueButton'
import { QuestionDescription } from './QuestionDescription'
import { TokenGroupChip } from '../TokenGroupChip'
import { CodeBlock } from './CodeBlock'
import { useCodeOutputAnswerStates } from './CodeOutputAnswer.states'
import { useLocaleContext } from '@/components/Localization/LocaleContext'

type CodeOutputAnswerProps = {
    question: CodeOutputQuestion
    language: string
    handleGoToNextActivity: () => void
}

export const CodeOutputAnswer: FC<CodeOutputAnswerProps> = ({ question, language, handleGoToNextActivity }) => {
    const { locale } = useLocaleContext()
    const { isAnswerCorrect, selectAnswer, options, handleCheckStatus } = useCodeOutputAnswerStates(question, language)

    return (
        <div className='flex flex-col gap-16 items-center'>
            <div className='flex flex-col items-center'>
                <QuestionDescription description={question.description[locale]} />
                <CodeBlock code={question.codeSnippet} language={language} />
            </div>
            <div className='flex flex-col gap-4 justify-center flex-wrap min-w-20 items-center'>
                {options.map((token, index) => (
                    <TokenGroupChip
                        onClick={() => selectAnswer(token)}
                        key={index}
                        optionWithToken={token}
                        isOneLined={true}
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
