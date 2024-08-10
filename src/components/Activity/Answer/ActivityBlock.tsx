import { Loading } from '@/components/Loading'
import { goToNextActivity, unitStore } from '@/components/Unit/unitStore'
import { useStore } from '@/components/Unit/useStore'
import React, { FC } from 'react'
import { FillInTheBlankAnswer } from './FillInTheBlankAnswer'
import { MultipleChoiceAnswer } from './MultipleChoiceAnswer'
import { SingleChoiceAnswer } from './SingleChoiceAnswer'

type AnswerBlockProps = {
}

export const ActivityBlock: FC<AnswerBlockProps> = () => {
    const currentActivityData = useStore(unitStore, (state) => state.currentActivityData)

    if (!currentActivityData) return <Loading visible={true} />


    return (
        <div className='flex flex-col gap-8'>
            {currentActivityData.question.type === 'FillInTheBlankQuestion' ? (
                <FillInTheBlankAnswer
                    question={currentActivityData.question}
                    language={currentActivityData.language}
                    handleGoToNextActivity={goToNextActivity} />
            ) :

                currentActivityData.question.type === "MultipleChoiceQuestion" ? (
                    <MultipleChoiceAnswer
                        question={currentActivityData.question}
                        language={currentActivityData.language}
                        handleGoToNextActivity={goToNextActivity} />
                ) : <SingleChoiceAnswer
                    question={currentActivityData.question}
                    language={currentActivityData.language}
                    handleGoToNextActivity={goToNextActivity} />

            }
        </div >
    )
}
