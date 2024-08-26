import React, { FC } from 'react'
import { CodeOutputQuestion } from '@contentlayer/generated'
import { TokenGroupChip } from '../TokenGroupChip'
import { CodeBlock } from './CodeBlock'
import { useCodeOutputAnswerStates } from './CodeOutputAnswer.states'

type CodeOutputAnswerProps = {
    question: CodeOutputQuestion
    language: string
    setLessonState: (state: 'none' | 'correct' | 'wrong' | 'completed') => void
}

export const CodeOutputAnswer: FC<CodeOutputAnswerProps> = ({ question, language, setLessonState }) => {
    const { selectAnswer, options } = useCodeOutputAnswerStates(question, language, setLessonState)

    return (
        <div className='flex flex-col gap-14 items-center'>
            <div className='flex flex-col items-center'>
                <CodeBlock code={question.codeSnippet} language={language} />
            </div>
            <div className='flex flex-col gap-4 justify-center flex-wrap min-w-20 items-center'>
                {options.map((token, index) => (
                    <TokenGroupChip
                        id="option"
                        onClick={() => selectAnswer(token)}
                        key={index}
                        optionWithToken={token}
                        isOneLined={true}
                    />
                ))}
            </div>
        </div>
    );
}
