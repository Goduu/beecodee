
import { Token } from "@/components/TokenColors/highlightCode"

export type AnswerStatus = "selected" | "neutral" | "correct" | "wrong" | "used"

export type TokenGroup = {
    tokens: Token[]
    status: AnswerStatus
}