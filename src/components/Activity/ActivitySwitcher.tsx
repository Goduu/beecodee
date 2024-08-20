import { Activity } from '@contentlayer/generated'
import React, { FC } from 'react'
import { FillInTheBlankAnswer } from './Answer/FillInTheBlankAnswer'
import { MultipleChoiceAnswer } from './Answer/MultipleChoiceAnswer'
import { SingleChoiceAnswer } from './Answer/SingleChoiceAnswer'
import { CodeOutputAnswer } from './Answer/CodeOutputAnswer'
import { PairMatchingAnswer } from './Answer/PairMatchingAnswer'

type ActivitySwitcherProps = {
    activity: Activity | null
    goToNextActivity?: () => void
}

export const ActivitySwitcher: FC<ActivitySwitcherProps> = ({ activity, goToNextActivity = () => { } }) => {
    if (!activity) return null

    return (

        activity.question.type === 'FillInTheBlankQuestion' ? (
            <FillInTheBlankAnswer
                question={activity.question}
                language={activity.language}
                handleGoToNextActivity={goToNextActivity} />
        ) :
            activity.question.type === "MultipleChoiceQuestion" ? (
                <MultipleChoiceAnswer
                    question={activity.question}
                    language={activity.language}
                    handleGoToNextActivity={goToNextActivity} />
            ) : activity.question.type === "SingleChoiceQuestion" ?
                <SingleChoiceAnswer
                    question={activity.question}
                    language={activity.language}
                    handleGoToNextActivity={goToNextActivity} /> :
                activity.question.type === "CodeOutputQuestion" ?
                    <CodeOutputAnswer
                        question={activity.question}
                        language={activity.language}
                        handleGoToNextActivity={goToNextActivity} /> :
                    <PairMatchingAnswer
                        question={activity.question}
                        language={activity.language}
                        handleGoToNextActivity={goToNextActivity} />


    )
}
