"use client"
import React, { FC, useEffect, useState } from 'react'
import { useActivityContext } from './ActivityContext'
import { Button } from '../Button'
import { highlightCode, Token } from '../token_colors/highlightCode'
import { TokenChip } from './TokenChip'
import { AnswerBlock } from './AnswerBlock'
import { AnswerStatus } from './types'
import { LuCheckCircle } from '../Icons'
import { redirect } from 'next/navigation'
import { useUnitStore } from '../Unit/unitStore'

type ActivityProps = {
}

export const ActivityBlock: FC<ActivityProps> = () => {
    const { currentActivity, increaseCurrentActivity } = useActivityContext()
    const [answer, setAnswer] = useState<Token[]>([])
    const [options, setOptions] = useState<Token[]>([])
    const [status, setStatus] = useState<AnswerStatus>('neutral')
    const correctAnswer = status === 'correct'
    const { currentUnit, goToNextLesson } = useUnitStore();

    useEffect(() => {
        if (!currentActivity) return
        const optionTokens = highlightCode(currentActivity.options || [], currentActivity.language)
        setOptions(optionTokens)
    }, [currentActivity])

    const handleFinishLesson = () => {
        goToNextLesson(currentUnit.slugAsParams)
        redirect('/')
    }

    if (!currentActivity) {
        return (
            <>
                <LuCheckCircle className='w-32 text-white rounded-full bg-green-500 p-5' />
                <Button onClick={handleFinishLesson}>Finish Lesson X</Button>
            </>
        )
    }

    const handleClick = (token: Token) => {
        if (correctAnswer) return

        setAnswer([...answer, token])
        setOptions(options.filter((t) => t !== token))
    }

    const removeTokenFromAnswer = (token: Token) => {
        if (correctAnswer) return

        setAnswer(answer.filter((t) => t !== token))
        setOptions([...options, token])
    }

    const handleCheck = () => {
        if (currentActivity.answer && JSON.stringify(currentActivity.answer) === JSON.stringify(answer.map(token => token.content))) {
            setStatus('correct');
        } else {
            setStatus('incorrect');
        }
    }

    const handleContinue = () => {
        increaseCurrentActivity();
        setAnswer([]);
        setStatus('neutral');
    }

    return (
        <div className='flex flex-col gap-8'>
            <div className='text-2xl font-extrabold'>
                {currentActivity.description}
            </div>
            <AnswerBlock removeToken={removeTokenFromAnswer} tokens={answer} status={status} />
            <div className='flex gap-2 justify-center'>
                {options.map((token, index) => (
                    <TokenChip onClick={() => handleClick(token)} key={index} token={token} />
                ))}
            </div>
            {status === "neutral" || status === "incorrect" ?
                <Button onClick={handleCheck}>Check</Button> :
                <Button onClick={handleContinue}>Continue</Button>
            }
        </div>
    )
}
