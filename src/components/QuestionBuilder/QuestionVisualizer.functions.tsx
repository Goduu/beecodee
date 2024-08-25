"use client"
import matter from 'gray-matter';
import { Activity, CodeOutputQuestion, FillInTheBlankQuestion, MDX, MultipleChoiceQuestion, PairMatchingQuestion, SingleChoiceQuestion } from '@contentlayer/generated';
import { RawDocumentData } from 'contentlayer/source-files';

export const parseAsMultipleChoiceQuestion = (markdown: string): MultipleChoiceQuestion => {
    const { data, content } = matter(markdown);

    return {
        _id: data._id,
        _raw: data._raw,
        type: 'MultipleChoiceQuestion',
        description: data.description,
        options: data.options,
        correctAnswer: data.correctAnswer,
    };
};

export const parseAsFillInTheBlankQuestion = (markdown: string): FillInTheBlankQuestion => {
    const { data, content } = matter(markdown);

    return {
        _id: data._id,
        _raw: data._raw,
        type: 'FillInTheBlankQuestion',
        description: data.description,
        segments: data.segments,
        options: data.options,
        correctAnswer: data.correctAnswer,
    };
};

export const parseAsCodeOutputQuestion = (markdown: string): CodeOutputQuestion => {
    const { data, content } = matter(markdown);

    return {
        _id: data._id,
        _raw: data._raw,
        type: 'CodeOutputQuestion',
        description: data.description,
        codeSnippet: data.codeSnippet,
        options: data.options,
        correctAnswer: data.correctAnswer,
    };
};

export const parseAsPairMatchingQuestion = (markdown: string): PairMatchingQuestion => {
    const { data, content } = matter(markdown);

    return {
        _id: data._id,
        _raw: data._raw,
        type: 'PairMatchingQuestion',
        description: data.description,
        correctAnswer: data.correctAnswer,
        options: data.options,
    };
}

export const parseAsSingleChoiceQuestion = (markdown: string): SingleChoiceQuestion => {
    const { data, content } = matter(markdown);

    return {
        _id: data._id,
        _raw: data._raw,
        type: 'SingleChoiceQuestion',
        description: data.description,
        correctAnswer: data.correctAnswer,
        options: data.options,
    };
}

export const parseAsQuestion = (markdown: string, questionType: Activity["question"]["type"]): Activity => {
    let question
    switch (questionType) {
        case 'MultipleChoiceQuestion':
            question = parseAsMultipleChoiceQuestion(markdown);
            break
        case 'FillInTheBlankQuestion':
            question = parseAsFillInTheBlankQuestion(markdown);
            break
        case 'CodeOutputQuestion':
            question = parseAsCodeOutputQuestion(markdown);
            break
        case 'PairMatchingQuestion':
            question = parseAsPairMatchingQuestion(markdown);
            break
        case 'SingleChoiceQuestion':
            question = parseAsSingleChoiceQuestion(markdown);
            break
        default:
            throw new Error(`Unknown question type: ${questionType}`);
    }
    return {
        _id: '',
        tags: [],
        _raw: raw,
        slug: '',
        language: 'javascript',
        slugAsParams: '',
        type: 'Activity',
        lesson: '',
        unit: '',
        course: '',
        body: { raw: "", html: "" },
        question,
    }
};

const raw: RawDocumentData = {
    sourceFilePath: '',
    sourceFileName: '',
    sourceFileDir: '',
    contentType: 'data',
    flattenedPath: '',
} 
