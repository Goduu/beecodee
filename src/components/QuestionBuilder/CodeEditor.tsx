"use client"
import { Activity } from '@contentlayer/generated';
import { ChangeEvent, FC, useEffect } from 'react'

type CodeEditorProps = {
    code: string;
    questionType: Activity["question"]["type"];
    setCode: (code: string) => void;
}
export const CodeEditor: FC<CodeEditorProps> = ({ code, setCode, questionType }) => {

    useEffect(() => {
        setCode(getNewTemplate(questionType));
    }, [questionType]);


    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCode(e.target.value);
    };

    return (
        <div className='w-full sm:w-1/2 flex flex-col gap-2'>
            <span className='text-2xl font-extrabold'>Template</span>
            <div className="border-amber-500 border-2 rounded-lg p-1  ">
                <textarea
                    className="w-full min-h-[400px] sm:min-h-[600px] bg-inherit p-5 outline-none flex-wrap"
                    value={code}
                    onChange={handleInputChange}
                    spellCheck="false"
                />
            </div>
        </div>
    )
}


const getNewTemplate = (questionType: Activity["question"]["type"]) => {
    switch (questionType) {
        case 'MultipleChoiceQuestion':
            return multipleChoiceQuestionTemplate
        case 'FillInTheBlankQuestion':
            return fillInTheBlankQuestionTemplate
        case 'CodeOutputQuestion':
            return codeOutputQuestionTemplate
        case 'PairMatchingQuestion':
            return pairMatchingQuestionTemplate
        case 'SingleChoiceQuestion':
            return singleChoiceQuestionTemplate
        default:
            throw new Error(`Unknown question type: ${questionType}`);
    }
}


const codeOutputQuestionTemplate =
    `---
type: CodeOutputQuestion
description: "My description" 
codeSnippet: |
    const = a
options: 
- content: "1"
  oType: "code"
- content: "text"
  oType: "text"
correctAnswer: ["1"]
---
`

const singleChoiceQuestionTemplate =
    `---
type: SingleChoiceQuestion
description: "My description"
options: 
  - content: "let bar = 20;"
    oType: "code"
  - content: "your text"
    oType: "text"
correctAnswer: ["your answer"]
---
`

const fillInTheBlankQuestionTemplate =
    `---
type: FillInTheBlankQuestion
description: "My description"
segments:
  - sType: "text"
    content: "Text"
  - sType: "gap"
    content: "10"
options: 
  - content: "myOption"
    oType: "text"
  - content: "my = CodeOption"
    oType: "code"
correctA: null
---
`

const multipleChoiceQuestionTemplate =
    `---
type: MultipleChoiceQuestion
description: "My description"
options: 
  - content: "code = option"
    oType: "code"
  - content: "textOption"
    oType: "text"
correctAnswer: ["my", "answer"]
---
`

const pairMatchingQuestionTemplate =
    `---
type: PairMatchingQuestion
description: "My description"
pairMatchingOptions:
  - content: "foo"
    oType: "code"
    position: "up"
  - content: "bar"
    oType: "text"
    position: "down"
correctAnswer: [["foo", "bar"]]
---
`
