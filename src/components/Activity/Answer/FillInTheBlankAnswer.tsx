import { FillInTheBlankQuestion } from "@contentlayer/generated";
import React, { FC, useCallback, useMemo } from "react";
import { AnswerStatus } from "./types";
import { useFillInTheBlankAnswerStates } from "./FillInTheBlankAnswer.states";
import { TokenGroupChip } from "../TokenChip/TokenGroupChip";
import { OptionWithTokens } from "@/components/TokenColors/highlightCode";

type FillInTheBlankQuestionProps = {
  question: FillInTheBlankQuestion;
  language: string;
  setLessonState: (state: "none" | "correct" | "wrong" | "completed") => void;
};

export const FillInTheBlankAnswer: FC<FillInTheBlankQuestionProps> = ({
  question,
  language,
  setLessonState,
}) => {
  const { status, options, segments, removeTokenFromAnswer, addTokenToAnswer } =
    useFillInTheBlankAnswerStates(question, language, setLessonState);

  // Return null early if segments are not available
  if (!segments) return null;

  // Memoize the status class for better performance
  const statusClass = useMemo(() => getStatusClass(status), [status]);

  // Handlers
  const handleRemoveToken = useCallback(
    (segment: OptionWithTokens) => removeTokenFromAnswer(segment),
    [removeTokenFromAnswer]
  );

  const handleAddToken = useCallback(
    (option: OptionWithTokens) => addTokenToAnswer(option),
    [addTokenToAnswer]
  );

  return (
    <div className="flex flex-col items-center gap-16 px-2">
      <div
        className={`flex w-full flex-col justify-center rounded-xl border-2 ${statusClass}`}
      >
        <div className="inline-block p-10 text-start">
          {segments.map((segment) => (
            <TokenGroupChip
              key={segment.id}
              type="answer"
              optionWithToken={segment}
              onClick={segment.type === "GapOption" ? () => handleRemoveToken(segment) : undefined}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {options.map((option, i) => (
          <TokenGroupChip
            key={`tokenOption-${option.id}-${i}`}
            onClick={() => handleAddToken(option)}
            optionWithToken={option}
            className="px-2"
          />
        ))}
      </div>
    </div>
  );
};

// Memoized function to avoid unnecessary recalculations
const getStatusClass = (status: AnswerStatus): string => {
  switch (status) {
    case "correct":
      return "border-lime-500";
    case "wrong":
      return "border-red-600";
    default:
      return "border-gray-500";
  }
};
