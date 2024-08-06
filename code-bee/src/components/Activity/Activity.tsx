"use client"
import React, { FC, useEffect, useState } from 'react'
import { useActivityContext } from '../ActivityContext'
import { Button } from '../Button'
import { highlightCode, Token } from '../token_colors/highlightCode'
import { TokenChip } from './TokenChip'
import { AnswerBlock } from './AnswerBlock'
import { AnswerStatus } from './types'
import Link from 'next/link'
import { LuCheckCircle } from '../Icons'

type ActivityProps = {
}
export const ActivityBlock: FC<ActivityProps> = () => {
    const { currentActivityIndex, currentActivity, increaseCurrentActivity } = useActivityContext()
    const [answer, setAnswer] = useState<Token[]>([])
    const [options, setOptions] = useState<Token[]>([])
    const [status, setStatus] = useState<AnswerStatus>('neutral')
    const correctAnswer = status === 'correct'

    useEffect(() => {
        if (!currentActivity) return
        const optionTokens = highlightCode(currentActivity.options || [], currentActivity.language)
        setOptions(optionTokens)
    }, [currentActivity])

    if (currentActivityIndex === -1) {
        return (
            <div>
                <Button handleClick={increaseCurrentActivity}>Start Lesson</Button>
            </div>
        )
    }

    if (!currentActivity) {
        return (
            <>
                <LuCheckCircle className='w-32 text-white rounded-full bg-green-500 p-5' />
                <Link href='/'>
                    <Button >Finish Lesson</Button>
                </Link>
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
        <div>
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
                    <Button handleClick={handleCheck}>Check</Button> :
                    <Button handleClick={handleContinue}>Continue</Button>
                }
            </div>

        </div>
    )
}
