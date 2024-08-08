"use client"
import React, { FC } from 'react'
import { Button } from '../Button'
import { LuCheckCircle } from '../Icons'
import { useActivityStates } from './useActivityStates'
import { SingleChoiceAnswer } from './Answer/SingleChoiceAnswer'
import { CompleteCodeAnswer } from './Answer/CompleteCodeAnswer'
import { MultipleChoiceAnswer } from './Answer/MultipleChoiceAnswer'

type ActivityProps = {
}

export const ActivityBlock: FC<ActivityProps> = () => {
    const {
        currentActivity,
        handleGoToNextActivity,
        handleFinishLesson,
    } = useActivityStates()


    if (!currentActivity) {
        return (
            <>
                <LuCheckCircle className='w-32 text-white rounded-full bg-green-500 p-5' />
                <Button onClick={handleFinishLesson}>Finish Lesson</Button>
            </>
        )
    }


    return (
        <div className='flex flex-col gap-8'>
            {currentActivity.question.type === 'CompleteCodeQuestion' ? (
                <CompleteCodeAnswer
                    question={currentActivity.question}
                    language={currentActivity.language}
                    handleGoToNextActivity={handleGoToNextActivity} />
            ) :

                currentActivity.question.type === "MultipleChoiceQuestion" ? (
                    <MultipleChoiceAnswer
                        question={currentActivity.question}
                        language={currentActivity.language}
                        handleGoToNextActivity={handleGoToNextActivity} />
                ) : <SingleChoiceAnswer
                    question={currentActivity.question}
                    language={currentActivity.language}
                    handleGoToNextActivity={handleGoToNextActivity} />

            }
        </div >
    )
}