"use client"
import { useCallback, useEffect, useState } from 'react'
import { useActivityContext } from './ActivityContext'
import { highlightCode, Token } from '../token_colors/highlightCode'
import { AnswerStatus } from './types'
import { redirect } from 'next/navigation'
import { useUnitStore } from '../Unit/unitStore'
import { useAudio } from '../useAudio'

export const useActivityStates = () => {
    const { currentActivity, increaseCurrentActivity } = useActivityContext()
    const [answer, setAnswer] = useState<Token[]>([])
    const [options, setOptions] = useState<Token[]>([])
    const [status, setStatus] = useState<AnswerStatus>('neutral')
    const { currentUnit, goToNextLesson } = useUnitStore()
    const { playSound, correctAnswer, wrongAnswer } = useAudio()

    const initializeOptions = useCallback(() => {
        const optionTokens = highlightCode(currentActivity?.options || [], currentActivity?.language || "javascript")
        setOptions(optionTokens)
    }, [currentActivity])

    useEffect(() => {
        if (currentActivity) {
            initializeOptions()
        }
    }, [currentActivity, initializeOptions])

    const handleFinishLesson = useCallback(() => {
        goToNextLesson(currentUnit.slugAsParams)
        redirect('/')
    }, [goToNextLesson, currentUnit])

    const handleClick = useCallback((token: Token) => {
        if (status === 'correct') return

        setAnswer((prevAnswer) => [...prevAnswer, token])
        setOptions((prevOptions) => prevOptions.filter((t) => t !== token))
    }, [status])

    const removeTokenFromAnswer = useCallback((token: Token) => {
        if (status === 'correct') return

        setAnswer((prevAnswer) => prevAnswer.filter((t) => t !== token))
        setOptions((prevOptions) => [...prevOptions, token])
    }, [status])

    const handleCheck = useCallback(() => {
        if (currentActivity?.answer && JSON.stringify(currentActivity.answer) === JSON.stringify(answer.map(token => token.content))) {
            playSound(correctAnswer)
            setStatus('correct')
        } else {
            playSound(wrongAnswer)
            setStatus('incorrect')
        }
    }, [currentActivity, answer])

    const handleContinue = useCallback(() => {
        increaseCurrentActivity()
        setAnswer([])
        setStatus('neutral')
    }, [increaseCurrentActivity])

    return {
        answer,
        options,
        status,
        currentActivity,
        handleCheck,
        handleClick,
        handleContinue,
        handleFinishLesson,
        removeTokenFromAnswer,
    }
}
