import { useCallback, useEffect, useState } from 'react'
import { AnswerStatus } from './types'
import { useAudio } from '@/components/useAudio'
import { Activity } from '@contentlayer/generated'
import { highlightArray, OptionWithTokens, Token } from '@/components/TokenColors/highlightCode'
import { useLocaleContext } from '@/components/Localization/LocaleContext'

export const useAnswerStates = (question: Activity["question"], language: string, isOneLined: boolean) => {
    const { locale } = useLocaleContext()
    const [options, setOptions] = useState<OptionWithTokens[]>([])
    const [answer, setAnswer] = useState<OptionWithTokens[]>([])
    const [status, setStatus] = useState<AnswerStatus>('neutral')
    const { playSound, correctAnswerSound, wrongAnswerSound } = useAudio()

    const initializeOptions = useCallback(() => {
        if (!("options" in question)) return
        const questionOptions = question.options.map(o => o.option)
        const optionTokens = highlightArray(questionOptions, language || "text", locale)
        setOptions(optionTokens.map(o => ({ ...o, isOneLined })))

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


    const removeOptionFromAnswer = useCallback((option: OptionWithTokens) => {
        if (status === 'correct') return

        setAnswer((prevAnswer) => prevAnswer.filter((t) => t !== option))
        setStatus('neutral')

    }, [status])

    const addTokenToAnswer = (token: OptionWithTokens) => {
        if (status === 'correct') return

        if (question.type === 'FillInTheBlankQuestion') {
            const questionGapsLength = question.segments?.filter((segment) => segment.segment.type === 'GapOption').length || 0
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
        if (answer.length === correctAnswer.length && answer.every((token, index) => token.id === correctAnswer[index])) {
            playSound(correctAnswerSound)
            setStatus('correct')
        } else {
            playSound(wrongAnswerSound)
            setStatus('wrong')
        }
    }, [question, answer, playSound])


    return {
        answer,
        options,
        status,
        handleCheckStatus,
        addTokenToAnswer,
        removeOptionFromAnswer,
    }
}
