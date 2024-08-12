import { useCallback, useEffect, useState } from 'react'
import { AnswerStatus, TokenGroup } from './types'
import { useAudio } from '@/components/useAudio'
import { FillInTheBlankQuestion } from '@contentlayer/generated'
import { highlightCode } from '@/components/TokenColors/highlightCode'
import { isEqual } from 'lodash'

export const useFillInTheBlankAnswerStates = (question: FillInTheBlankQuestion, language: string) => {

    const [options, setOptions] = useState<TokenGroup[]>([])
    const [answer, setAnswer] = useState<TokenGroup[]>([])
    const [status, setStatus] = useState<AnswerStatus>('neutral')
    const { playSound, correctAnswerSound, wrongAnswerSound } = useAudio()

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
        setAnswer([])
        setStatus('neutral')
    }

    useEffect(() => {
        if (question) {
            initializeOptions()
        }
        resetStates()
    }, [question, initializeOptions])


    const removeTokenFromAnswer = useCallback((token: TokenGroup) => {
        if (status === 'correct') return
        setOptions((prev) =>
            prev.map((option) => {
                if (isEqual(option.tokens, token.tokens)) {
                    option.status = 'neutral'
                }
                return option

            })
        )

        setAnswer((prevAnswer) => prevAnswer.filter((t) => t !== token))
        setStatus('neutral')

    }, [status])

    const addTokenToAnswer = (token: TokenGroup) => {
        if (status === 'correct') return


        const questionGapsLength = question.segments?.filter((segment) => segment.sType === 'gap').length || 0
        if (answer.length >= questionGapsLength) return
        else {
            setAnswer((prevAnswer) => [...prevAnswer, { ...token, status: 'filled' }])
        }

        setOptions((prev) =>
            prev.map((option) => {
                if (option === token) {
                    option.status = 'used'
                }
                return option

            })
        )

        setStatus('neutral')
    }


    const handleCheckStatus = useCallback(() => {
        const correctAnswer = question.correctAnswer
        const answerContent = answer.map(tokenGroup => tokenGroup.tokens.map(token => token.content).join('')).join('')

        if (correctAnswer && JSON.stringify(correctAnswer.join('')) === JSON.stringify(answerContent)) {
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
