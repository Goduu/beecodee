"use client"
import React, { FC } from 'react'
import { Button } from '../Button'
import { LuCheckCircle } from '../Icons'
import { SingleChoiceAnswer } from './Answer/SingleChoiceAnswer'
import { FillInTheBlankAnswer } from './Answer/FillInTheBlankAnswer'
import { MultipleChoiceAnswer } from './Answer/MultipleChoiceAnswer'
import { redirect } from 'next/navigation'
import { goToNextActivity, goToNextLesson, unitStore } from '../Unit/unitStore'
import { useStore } from 'zustand'
import { Loading } from '../Loading'

export const ActivityBlock: FC = () => {
    const currentActivityData = useStore(unitStore, (state) => state.currentActivityData)
    const currentUnitId = useStore(unitStore, (state) => state.currentUnitId)
    const unit = useStore(unitStore, (state) => state.units[currentUnitId || ''])

    const currentLessonIndex = unit?.currentLessonIndex || 0
    const currentLesson = unit?.lessons[currentLessonIndex]

    if (currentLesson?.concluded) {
        return (
            <>
                <LuCheckCircle className='w-32 text-white rounded-full bg-green-500 p-5' />
                <Button onClick={() => { goToNextLesson(); redirect("/") }}>Finish Lesson</Button>
            </>
        )
    }

    if (!currentActivityData) return <Loading visible={true} />

    const handlePassActivity = () => {
        goToNextActivity()
    }

    return (
        <div className='flex flex-col gap-8'>
            {currentActivityData.question.type === 'FillInTheBlankQuestion' ? (
                <FillInTheBlankAnswer
                    question={currentActivityData.question}
                    language={currentActivityData.language}
                    handleGoToNextActivity={handlePassActivity} />
            ) :

                currentActivityData.question.type === "MultipleChoiceQuestion" ? (
                    <MultipleChoiceAnswer
                        question={currentActivityData.question}
                        language={currentActivityData.language}
                        handleGoToNextActivity={handlePassActivity} />
                ) : <SingleChoiceAnswer
                    question={currentActivityData.question}
                    language={currentActivityData.language}
                    handleGoToNextActivity={handlePassActivity} />

            }
        </div >
    )
}