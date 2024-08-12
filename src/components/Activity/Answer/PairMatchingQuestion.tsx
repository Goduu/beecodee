import React, { FC, useEffect, useRef, useState } from 'react';
import { PairMatchingQuestion } from '@contentlayer/generated';
import { QuestionDescription } from './QuestionDescription';
import { TokenGroup } from './types';
import { TokenGroupChip } from '../TokenGroupChip';
import { Button } from '@/components/Button';
import { generatePairMatchingOptions, hasWrongStatus, updateOptionsStatus } from './PairMatchingQuestion.functions';

type PairMatchingAnswerProps = {
    question: PairMatchingQuestion;
    language: string;
    handleGoToNextActivity: () => void;
};

export const PairMatchingAnswer: FC<PairMatchingAnswerProps> = ({ question, language, handleGoToNextActivity }) => {
    const [options, setOptions] = useState<TokenGroup[]>([]);
    const wrongStatusTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const pairMatchingOptions = generatePairMatchingOptions(question, language);
        setOptions(pairMatchingOptions);
    }, [question, language]);

    const handleSelectOption = (selectedTokenGroup: TokenGroup): void => {
        clearTimeout(wrongStatusTimeoutRef.current!);
        setOptions(prevOptions => {
            const updatedOptions = updateOptionsStatus(prevOptions, selectedTokenGroup, question.correctAnswer);
            if (hasWrongStatus(updatedOptions)) {
                wrongStatusTimeoutRef.current = setTimeout(() => {
                    resetWrongStatus();
                }, 750); // Change status back to neutral after 1 second
            }
            return updatedOptions;
        });
    };

    const resetWrongStatus = () => {
        setOptions(prevOptions =>
            prevOptions.map(tokenGroup =>
                tokenGroup.status === 'wrong' ? { ...tokenGroup, status: 'neutral' } : tokenGroup
            )
        );
    };

    return (
        <div className="flex flex-col gap-16 items-center">
            <QuestionDescription description={question.description} />
            <div className="flex flex-col gap-4 justify-center">
                {options.map((tokens, index) => (
                    <TokenGroupChip key={`tokenGroup-${index}`} tokenGroup={tokens} onClick={() => handleSelectOption(tokens)} />
                ))}
            </div>
            <Button disabled={!!options.find(option => option.status !== "correct")} onClick={handleGoToNextActivity}>Continue</Button>
        </div>
    );
};
