"use client"
import React, { useState } from 'react'
import { CodeEditor } from '../QuestionBuilder/CodeEditor'
import { QuestionVisualizer } from '../QuestionBuilder/QuestionVisualizer'
import { Activity } from '@contentlayer/generated'
import { Button } from '../Button'
import { TbPencilQuestion } from '../Svgs/Icons'

export const QuestionBuilderPage = () => {
    const [code, setCode] = useState('xongas');
    const [questionType, setQuestionType] = useState<Activity["question"]["type"]>("CodeOutputQuestion");

    return (
        <div className="flex flex-col items-center py-20 px-5 gap-4 justify-center w-screen sm:pl-52">
            <div className='flex gap-2 text-3xl font-bold'>Question Builder <TbPencilQuestion className='w-8' /></div>
            <div className='justify-self-start w-full'>
                <div className='flex gap-2 items-start flex-wrap'>
                    Templates:
                    <Button size="small" color="secondary" onClick={() => setQuestionType("CodeOutputQuestion")}>Code Output</Button>
                    <Button size="small" color="secondary" onClick={() => setQuestionType("FillInTheBlankQuestion")}>Fill in the Blank</Button>
                    <Button size="small" color="secondary" onClick={() => setQuestionType("SingleChoiceQuestion")}>Single Choice</Button>
                    <Button size="small" color="secondary" onClick={() => setQuestionType("MultipleChoiceQuestion")}>Multiple Choice</Button>
                    <Button size="small" color="secondary" onClick={() => setQuestionType("PairMatchingQuestion")}>Pair Matching</Button>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row justify-center w-full gap-2'>
                <CodeEditor code={code} setCode={setCode} questionType={questionType} />
                <div className='w-1/2'>
                    <QuestionVisualizer code={code} questionType={questionType} />
                </div>
            </div>
        </div>
    )
}
