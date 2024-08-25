
import { OptionWithTokens } from "@/components/TokenColors/highlightCode"

export type AnswerStatus = "selected" | "neutral" | "correct" | "wrong" | "used" | "filled"

export type TokenGroup = {
    optionWithToken: OptionWithTokens[]
    status: AnswerStatus
}