import { useCallback, useEffect, useState } from 'react'
import { AnswerStatus } from './types'
import { useAudio } from '@/components/useAudio'
import { SingleChoiceQuestion } from '@contentlayer/generated'
import { highlightCode, OptionWithTokens } from '@/components/TokenColors/highlightCode'
import { isEqual } from 'lodash'
import { useLocaleContext } from '@/components/Localization/LocaleContext'

export const useSingleChoiceAnswerStates = (question: SingleChoiceQuestion, language: string) => {
    const { locale } = useLocaleContext()
    const [options, setOptions] = useState<OptionWithTokens[]>([])
    const [answer, setAnswer] = useState<OptionWithTokens | undefined>()
    const { playSound, correctAnswerSound, wrongAnswerSound } = useAudio()

    const isAnswerCorrect = !!options.find(option => option.status === 'correct')

    const initializeOptions = useCallback(() => {
        const optionTokens: OptionWithTokens[] = []
        question.options?.forEach((option) => {
            optionTokens.push({
                ...highlightCode(option.option, language || "text", locale),
                isOneLined: true
            })
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



    const selectAnswer = (option: OptionWithTokens) => {
        if (isAnswerCorrect) return
        if (answer && isEqual(answer, option)) {
            setAnswer(undefined)
            changeOptionStatus(option, 'neutral')
        }

        else {
            setAnswer(option)
            changeOptionStatus(option, 'selected')
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

        if (correctAnswer && answer.id === correctAnswer[0]) {
            playSound(correctAnswerSound)
            changeOptionStatus(answer, 'correct')
        } else {
            playSound(wrongAnswerSound)
            changeOptionStatus(answer, 'wrong')
        }
    }, [question, answer, correctAnswerSound])


    return {
        answer,
        options,
        isAnswerCorrect,
        handleCheckStatus,
        selectAnswer,
    }
}
