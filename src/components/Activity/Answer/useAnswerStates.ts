import { highlightArray, Token } from '@/components/token_colors/highlightCode'
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
        const optionTokens = highlightArray(question.options || [], language || "text")
        setOptions(optionTokens)

    }, [question, language])

    const resetStates = () => {
        setAnswer([])
        setStatus('neutral')
    }

    useEffect(() => {
        if (question) {
            initializeOptions()
        }
        resetStates()
    }, [question, initializeOptions])


    const removeTokenFromAnswer = useCallback((token: Token) => {
        if (status === 'correct') return

        setAnswer((prevAnswer) => prevAnswer.filter((t) => t !== token))
        setStatus('neutral')

    }, [status])

    const addTokenToAnswer = (token: Token) => {
        if (status === 'correct') return

        if (question.type === 'FillInTheBlankQuestion') {
            const questionGapsLength = question.segments?.filter((segment) => segment.sType === 'gap').length || 0
            if (answer.length >= questionGapsLength) return
            else {
                setAnswer((prevAnswer) => [...prevAnswer, token])
            }
        }

        if (question.type === 'SingleChoiceQuestion') {
            setAnswer([token])
        }
        if (question.type === 'MultipleChoiceQuestion') {
            setAnswer((prevAnswer) => [...prevAnswer, token])
        }
        setStatus('neutral')
    }


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
        addTokenToAnswer,
        removeTokenFromAnswer,
    }
}
