"use client"
import React, { FC } from 'react'
import { Button } from '../Button'
import { TokenChip } from './TokenChip'
import { AnswerBlock } from './Answer/AnswerBlock'
import { LuCheckCircle } from '../Icons'
import { CompleteCodeAnswer } from './Answer/CompleteCodeAnswer'
import { useActivityStates } from './useActivityStates'
import { correctAnswer } from '../SoundEffect'

type ActivityProps = {
}

export const ActivityBlock: FC<ActivityProps> = () => {
    const {
        answer,
        status,
        options,
        currentActivity,
        handleCheck,
        handleClick,
        handleContinue,
        handleFinishLesson,
        removeTokenFromAnswer,
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
            <div className='text-xl sm:text-2xl font-extrabold flex-wrap'>
                {currentActivity.description}
            </div>
            {currentActivity.questionType === 'completeCode' ? (
                <CompleteCodeAnswer tokens={answer} segments={currentActivity.segments} status={status} removeToken={removeTokenFromAnswer} />
            ) :
                <AnswerBlock tokens={answer} status={status} removeToken={removeTokenFromAnswer} />
            }
            <div className='flex gap-4 justify-center flex-wrap'>
                {options.map((token, index) => (
                    <TokenChip onClick={() => handleClick(token)} key={index} token={token} />
                ))}
            </div>
            {status === 'neutral' || status === 'incorrect' ? (
                <Button onClick={handleCheck}>Check</Button>
            ) : (
                <Button onClick={handleContinue}>Continue</Button>
            )}
        </div>
    )
}