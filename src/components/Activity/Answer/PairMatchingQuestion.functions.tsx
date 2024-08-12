import { PairMatchingQuestion } from "@contentlayer/generated";
import { AnswerStatus, TokenGroup } from "./types";
import { highlightCode } from "@/components/TokenColors/highlightCode";
import { isEqual } from "lodash";

// Generate pair matching options based on the question and language
export const generatePairMatchingOptions = (question: PairMatchingQuestion, language: string): TokenGroup[] => {
    return question.pairMatchingOptions.reduce((acc, option) => {
        const tokens = option.oType === 'code' ? highlightCode(option.content, language) : [{ content: option.content, type: 'text' }];
        const tokenGroup: TokenGroup = { tokens, status: 'neutral' };
        acc.push(tokenGroup);
        return acc;
    }, [] as TokenGroup[]);
};

// Update the status of options based on the selected token group
export const updateOptionsStatus = (
    options: TokenGroup[],
    selectedTokenGroup: TokenGroup,
    correctAnswer: string[][]
): TokenGroup[] => {
    const selected = options.filter(({ status }) => status === 'selected');
    const selectedContent = getTokenGroupContent(selected);

    let changeOtherStatusTo: AnswerStatus = 'neutral';

    const updatedOptions = options.map(tokenGroup => {
        if (tokenGroup.status === 'correct') return tokenGroup;

        if (tokenGroup === selectedTokenGroup) {
            const newStatus = determineStatus(selected, selectedContent, tokenGroup, correctAnswer);
            changeOtherStatusTo = newStatus;
            return { ...tokenGroup, status: newStatus };
        }

        return tokenGroup;
    });

    // If there is already one selected, update its status based on the new selection
    if (selected.length === 1) {
        return updatedOptions.map(tokenGroup => {
            if (tokenGroup.status === 'selected') {
                return { ...tokenGroup, status: changeOtherStatusTo };
            }
            return tokenGroup;
        });
    }

    return updatedOptions;
};

// Determine the new status of a token group based on the current selection
export const determineStatus = (
    selected: TokenGroup[],
    selectedContent: string,
    tokenGroup: TokenGroup,
    correctAnswer: string[][]
): AnswerStatus => {
    const tokenContent = getTokenContent(tokenGroup);
    const alreadySelected = ['selected', 'wrong'].includes(tokenGroup.status);

    if (alreadySelected) return 'neutral';
    if (selected.length === 0) return 'selected';

    const isCorrect = correctAnswer.some(arr =>
        isEqual(arr, [selectedContent, tokenContent].filter(Boolean)) ||
        isEqual(arr, [tokenContent, selectedContent].filter(Boolean))
    );

    return isCorrect ? 'correct' : 'wrong';
};

// Get the concatenated content of a token group
export const getTokenContent = (tokenGroup: TokenGroup): string =>
    tokenGroup.tokens.map(token => token.content).join('');

// Get the concatenated content of multiple token groups
export const getTokenGroupContent = (tokensGroup: TokenGroup[]): string =>
    tokensGroup.map(getTokenContent).join('');

export const hasWrongStatus = (options: TokenGroup[]): boolean =>
    options.some(tokenGroup => tokenGroup.status === 'wrong');