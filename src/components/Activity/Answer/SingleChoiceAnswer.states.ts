import { useCallback, useEffect, useState } from 'react'
import { AnswerStatus, TokenGroup } from './types'
import { useAudio } from '@/components/useAudio'
import { SingleChoiceQuestion } from '@contentlayer/generated'
import { highlightCode } from '@/components/TokenColors/highlightCode'
import { isEqual } from 'lodash'

export const useSingleChoiceAnswerStates = (question: SingleChoiceQuestion, language: string) => {

    const [options, setOptions] = useState<TokenGroup[]>([])
    const [answer, setAnswer] = useState<TokenGroup | undefined>()
    const { playSound, correctAnswerSound, wrongAnswerSound } = useAudio()

    const isAnswerCorrect = !!options.find(option => option.status === 'correct')

    const initializeOptions = useCallback(() => {
        const optionTokens: TokenGroup[] = []
        question.options?.forEach((option) => {
            if (option.oType === 'code') {
                optionTokens.push({
                    status: 'neutral',
                    tokens: highlightCode(option.content, language || "text")
                })
            } else {
                optionTokens.push({
                    status: 'neutral',
                    tokens: [{ content: option.content, type: 'text' }]
                })
            }
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



    const selectAnswer = (token: TokenGroup) => {
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

    const changeOptionStatus = (token: TokenGroup, status: AnswerStatus) => {
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
        const answerContent = answer?.tokens.map(token => token.content).join('') || ''
        if (correctAnswer && JSON.stringify(correctAnswer.join('')) === JSON.stringify(answerContent)) {
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
