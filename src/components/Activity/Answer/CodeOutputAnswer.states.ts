import { useCallback, useEffect, useState } from 'react'
import { AnswerStatus } from './types'
import { useAudio } from '@/components/useAudio'
import { CodeOutputQuestion } from '@contentlayer/generated'
import { highlightCode, OptionWithTokens } from '@/components/TokenColors/highlightCode'
import { isEqual } from 'lodash'
import { useLocaleContext } from '@/components/Localization/LocaleContext'
import { useQuizContext } from '../Quiz.context'

export const useCodeOutputAnswerStates = (question: CodeOutputQuestion, language: string, setLessonState: (state: 'none' | 'correct' | 'wrong' | 'completed') => void
) => {
    const { locale } = useLocaleContext()
    const [options, setOptions] = useState<OptionWithTokens[]>([])
    const [answer, setAnswer] = useState<OptionWithTokens | undefined>()
    const { playSound, correctAnswerSound, wrongAnswerSound } = useAudio()
    const { checkFlag, toggleCheckFlag } = useQuizContext()

    useEffect(() => {
        if (checkFlag) {
            handleCheckStatus()
            toggleCheckFlag()
        }
    }, [checkFlag])

    const isAnswerCorrect = !!options.find(option => option.status === 'correct')

    const initializeOptions = useCallback(() => {
        const optionTokens: OptionWithTokens[] = []
        question.options?.forEach((option) => {
            optionTokens.push(highlightCode(option.option, language || "text", locale))
        })
        setOptions(optionTokens)

    }, [question, language])

    const resetStates = () => {
        setAnswer(undefined)
    }

    useEffect(() => {
        if (question) {
            initializeOptions()
        }
        resetStates()
    }, [question, initializeOptions])



    const selectAnswer = (token: OptionWithTokens) => {
        if (isAnswerCorrect) return
        if (answer && isEqual(answer, token)) {
            setAnswer(undefined)
            changeOptionStatus(token, 'neutral')
        }

        else {
            setAnswer(token)
            changeOptionStatus(token, 'selected')
        }

    }

    const changeOptionStatus = (token: OptionWithTokens, status: AnswerStatus) => {
        setOptions((prev) =>
            prev.map((option) => {
                if (option === token) {
                    option.status = status
                } else {
                    option.status = 'neutral'
                }
                return option

            })
        )
    }

    const handleCheckStatus = useCallback(() => {
        if (!answer) return
        const correctAnswer = question.correctAnswer

        if (correctAnswer && correctAnswer[0] === answer.id) {
            playSound(correctAnswerSound)
            changeOptionStatus(answer, 'correct')
            setLessonState('correct')
        } else {
            playSound(wrongAnswerSound)
            changeOptionStatus(answer, 'wrong')
            setLessonState('wrong')
        }
    }, [question, answer])


    return {
        answer,
        options,
        isAnswerCorrect,
        handleCheckStatus,
        selectAnswer,
    }
}
