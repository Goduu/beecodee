import { highlightCode, Token } from '@/components/token_colors/highlightCode'
import { useCallback, useEffect, useState } from 'react'
import { AnswerStatus } from '../types'
import { useAudio } from '@/components/useAudio'
import { Activity } from '@contentlayer/generated'

export const useAnswerStates = (question: Activity["question"], language: string) => {

    const [options, setOptions] = useState<Token[]>([])
    const [answer, setAnswer] = useState<Token[]>([])
    const [status, setStatus] = useState<AnswerStatus>('neutral')
    const { playSound, correctAnswerSound, wrongAnswerSound } = useAudio()

    const initializeOptions = useCallback(() => {
        const optionTokens = highlightCode(question.options || [], language || "javascript")
        setOptions(optionTokens)
    }, [question, language])

    useEffect(() => {
        if (question) {
            initializeOptions()
        }
    }, [question, initializeOptions])

    const handleClick = useCallback((token: Token) => {
        if (status === 'correct') return

        setAnswer((prevAnswer) => [...prevAnswer, token])
        setOptions((prevOptions) => prevOptions.filter((t) => t !== token))
    }, [status])

    const removeTokenFromAnswer = useCallback((token: Token) => {
        if (status === 'correct') return

        setAnswer((prevAnswer) => prevAnswer.filter((t) => t !== token))
        setOptions((prevOptions) => [...prevOptions, token])
        setStatus('neutral')

    }, [status])

    const addTokenToAnswer = useCallback((token: Token) => {
        if (status === 'correct') return

        if (question.type === 'SingleChoiceQuestion') {
            setAnswer([token])
        } else {
            setOptions((prevOptions) => prevOptions.filter((t) => t !== token))
            setAnswer((prevAnswer) => [...prevAnswer, token])
        }
        setStatus('neutral')
    }, [status])


    const handleCheckStatus = useCallback(() => {
        const correctAnswer = question.correctAnswer
        if (correctAnswer && JSON.stringify(correctAnswer) === JSON.stringify(answer.map(token => token.content))) {
            playSound(correctAnswerSound)
            setStatus('correct')
        } else {
            playSound(wrongAnswerSound)
            setStatus('wrong')
        }
    }, [question, answer])


    return {
        answer,
        options,
        status,
        handleCheckStatus,
        handleClick,
        addTokenToAnswer,
        removeTokenFromAnswer,
    }
}
