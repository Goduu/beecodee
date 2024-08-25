import React, { FC, useEffect, useRef, useState } from 'react';
import { PairMatchingQuestion } from '@contentlayer/generated';
import { QuestionDescription } from './QuestionDescription';
import { TokenGroupChip } from '../TokenGroupChip';
import { Button } from '@/components/Button';
import { generatePairMatchingOptions, hasWrongStatus, updateOptionsStatus } from './PairMatchingAnswer.functions';
import { useAudio } from '@/components/useAudio';
import { useLocaleContext } from '@/components/Localization/LocaleContext';
import { OptionWithTokens } from '@/components/TokenColors/highlightCode';

type PairMatchingAnswerProps = {
    question: PairMatchingQuestion;
    language: string;
    handleGoToNextActivity: () => void;
};

export const PairMatchingAnswer: FC<PairMatchingAnswerProps> = ({ question, language, handleGoToNextActivity }) => {
    const [options, setOptions] = useState<OptionWithTokens[]>([]);
    const wrongStatusTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const { locale } = useLocaleContext();
    const { playSound, correctAnswerSound, wrongAnswerSound } = useAudio()

    useEffect(() => {
        const pairMatchingOptions = generatePairMatchingOptions(question, language, locale);
        setOptions(pairMatchingOptions);
    }, [question, language]);

    useEffect(() => {
        options.every(option => option.status === 'correct') && playSound(correctAnswerSound);
        options.find(option => option.status === 'wrong') && playSound(wrongAnswerSound);
    }, [options])


    const handleSelectOption = (selectedOption: OptionWithTokens): void => {
        clearTimeout(wrongStatusTimeoutRef.current!);

        setOptions(prevOptions => {
            const updatedOptions = updateOptionsStatus(prevOptions, selectedOption, question.correctAnswer);
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
            prevOptions.map(option =>
                option.status === 'wrong' ? { ...option, status: 'neutral' } : option
            )
        );
    };

    return (
        <div className="flex flex-col gap-10 sm:gap-16 items-center">
            <QuestionDescription description={question.description[locale]} />
            <div className="flex flex-col gap-4">
                {options.map((option, index) => (
                    <TokenGroupChip key={`tokenGroup-${index}`} optionWithToken={option} onClick={() => handleSelectOption(option)} isOneLined={option.isOneLined} />
                ))}
            </div>
            <Button disabled={!!options.find(option => option.status !== "correct")} onClick={handleGoToNextActivity}>Continue</Button>
        </div>
    );
};
