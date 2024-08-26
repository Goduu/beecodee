import { Option } from "@contentlayer/generated"
import Prism from "prismjs"
import { BeeLocale } from "../Localization/localization"
import { AnswerStatus } from "../Activity/Answer/types"

export type OptionWithTokens = {
  id: Option["option"]["id"]
  type: Option["option"]["type"] | "GapOption"
  content: Option["option"]["content"]
  status?: AnswerStatus
  tokens: Token[]
  isOneLined?: boolean
}

export type Token = {
  content: Prism.Token["content"]
  type: Prism.Token["type"] | null
  size?: number
}

/**
 * Highlights code using Prism.js and returns HTML with color.
 * @param code - The code to be highlighted, either as a single string or an array of strings.
 * @param language - The language of the code (e.g., 'javascript', 'python').
 * @returns The highlighted code with HTML and CSS classes for syntax highlighting.
 */
export function highlightCode(option: Option["option"], language: string, locale: BeeLocale): OptionWithTokens {
  // Check if code is an array and join it into a single string
  let codeStr
  if (option.type === "CodeOption") {
    codeStr = Array.isArray(option.content) ? option.content.join(" ") : option.content
  } else {
    codeStr = Array.isArray(option.content[locale]) ? option.content[locale].join(" ") : option.content[locale]
  }
  const codeWithTabs = codeStr.replace(/  /g, "\t")
  // Use Prism to highlight the code
  // const highlightedCode = Prism.highlight(codeWithTabs, Prism.languages[language] || Prism.languages.javascript, language);
  const codeTokenized = Prism.tokenize(codeWithTabs, Prism.languages[language])

  const tokens: Token[] = []

  const processToken = (token: Prism.Token | string) => {
    if (typeof token === "string") {
      if (token.includes("\n")) {
        tokens.push({ content: "\n", type: "format" })
      }
      if (token.includes("\t")) {
        tokens.push({ content: "\t", type: "format" })
      }
      if (token.replace(/\n/g, "") !== "") {
        tokens.push({ content: token, type: null })
      }
    } else {
      // the content can be a string or an array of strings | Tokens
      if (Array.isArray(token.content)) {
        tokens.push({
          content: token.content.map((c) => (typeof c === "string" ? c : c.content)).join(""),
          type: token.type,
        })
      } else {
        tokens.push({
          content: token.content,
          type: token.type,
        })
      }
    }
  }

  codeTokenized.forEach(processToken)
  return {
    ...option,
    id: option.id,
    status: "neutral",
    tokens: tokens,
  }
}

export function highlightArray(options: Option["option"][], language: string, locale: BeeLocale): OptionWithTokens[] {
  const tokens: OptionWithTokens[] = []

  return options.map((option) => highlightCode(option, language, locale))
}

export const tokenizeCode = (code: string, language: string) => {
  const codeTokenized = Prism.highlight(code, Prism.languages[language] || Prism.languages.javascript, language)

  return codeTokenized
}
