"use client"
import { Loading } from '@/components/Loading'
import { goToNextActivity, unitStore } from '@/components/Unit/unitStore'
import { useStore } from '@/components/useStore'
import React, { FC } from 'react'
import { FillInTheBlankAnswer } from './Answer/FillInTheBlankAnswer'
import { MultipleChoiceAnswer } from './Answer/MultipleChoiceAnswer'
import { SingleChoiceAnswer } from './Answer/SingleChoiceAnswer'
import { PairMatchingAnswer } from './Answer/PairMatchingQuestion'
import { CodeOutputAnswer } from './Answer/CodeOutputAnswer'
import { allActivities } from '@contentlayer/generated'

type AnswerBlockProps = {
}

export const ActivityBlock: FC<AnswerBlockProps> = () => {
    const onGoingActivitySlug = useStore(unitStore, (state) => state.onGoingActivitySlug)
    // @ToDo implement a map for allActivities to avoid this find
    const onGoingActivityData = allActivities.find((activity) => activity.slugAsParams === onGoingActivitySlug)

    if (!onGoingActivityData) return null


    return (
        <div className='flex flex-col gap-8'>
            {onGoingActivityData.question.type === 'FillInTheBlankQuestion' ? (
                <FillInTheBlankAnswer
                    question={onGoingActivityData.question}
                    language={onGoingActivityData.language}
                    handleGoToNextActivity={goToNextActivity} />
            ) :
                onGoingActivityData.question.type === "MultipleChoiceQuestion" ? (
                    <MultipleChoiceAnswer
                        question={onGoingActivityData.question}
                        language={onGoingActivityData.language}
                        handleGoToNextActivity={goToNextActivity} />
                ) : onGoingActivityData.question.type === "SingleChoiceQuestion" ?
                    <SingleChoiceAnswer
                        question={onGoingActivityData.question}
                        language={onGoingActivityData.language}
                        handleGoToNextActivity={goToNextActivity} /> :
                    onGoingActivityData.question.type === "CodeOutputQuestion" ?
                        <CodeOutputAnswer
                            question={onGoingActivityData.question}
                            language={onGoingActivityData.language}
                            handleGoToNextActivity={goToNextActivity} /> :
                        <PairMatchingAnswer
                            question={onGoingActivityData.question}
                            language={onGoingActivityData.language}
                            handleGoToNextActivity={goToNextActivity} />

            }
        </div >
    )
}
