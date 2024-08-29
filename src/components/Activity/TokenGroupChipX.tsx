import React, { FC, useMemo, useCallback, Fragment } from "react"
import { AnswerStatus } from "./Answer/types"
import { tokenTypeToTailwindClass } from "../TokenColors/tokenToTailwindClass"
import { OptionWithTokens, Token } from "../TokenColors/highlightCode"
import { cn } from "@/lib/utils"

type ChipType = "answer" | "option"

type TokenGroupChipProps = {
  id: string
  optionWithToken: OptionWithTokens
  type?: ChipType
  isOneLined?: boolean
  onClick?: () => void
}

export const TokenGroupChip: FC<TokenGroupChipProps> = ({
  id,
  optionWithToken,
  onClick,
  type = "option",
  isOneLined,
}) => {
  const commonClassNames = useMemo(
    () =>
      cn(
        `flex cursor-pointer rounded-md bg-gray-300 px-2 py-1 dark:bg-gray-800`,
        getStatusClass(optionWithToken.status),
      ),
    [optionWithToken.status],
  )

  const renderTokenContentCallback = useCallback(
    (token: Token, index: number) =>
      renderTokenContent(`${id} - ${index} `, token, type, optionWithToken.status || "neutral", onClick, isOneLined),
    [id, optionWithToken.status, onClick, isOneLined, type],
  )

  if (isOneLined) {
    return (
      <span onClick={onClick} className={commonClassNames}>
        {optionWithToken.tokens.map(renderTokenContentCallback)}
      </span>
    )
  }

  return <>{optionWithToken.tokens.map(renderTokenContentCallback)}</>
}

const renderGapContent = (id: string | number, token: Token, onClick?: () => void) => {
  const classNames = getClassNames("neutral", token.type || "", false, "option", false, false)
  return (
    <span
      onClick={token.content ? onClick : undefined}
      key={`gapContent - ${id} `}
      className={`text-slate-50 text-opacity-0 ${classNames} `}
    >
      {token.content ? renderTokenContent(`gap-filled-${id} `, token) : "_".repeat(Number(token.size))}
    </span>
  )
}

const renderTokenContent = (
  id: string | number,
  token: Token,
  type?: ChipType,
  status?: AnswerStatus,
  onClick?: () => void,
  isOneLined?: boolean,
) => {
  const classNames = getClassNames(status, token.type || "", false, type, !!onClick, isOneLined)

  if (token.content === "\n") {
    return (
      <Fragment key={`content - ${id} `}>
        <span onClick={onClick} className={`text-slate-50 text-opacity-10 ${classNames} `}>
          \n
        </span>
        <br />
      </Fragment>
    )
  }

  if (token.content === "\t") {
    return (
      <span
        key={`tab - ${id} `}
        className={`w-14 text-center text-slate-50 text-opacity-10 ${classNames} `}
        onClick={onClick}
      >
        \t
      </span>
    )
  }

  if (token.type === "gap") {
    return renderGapContent(id, token, onClick)
  }

  return (
    <span key={`normal - ${id} `} onClick={onClick} className={classNames}>
      {token.content.toString().replace(/ /g, "\u00A0")}
    </span>
  )
}

const getClassNames = (
  status?: AnswerStatus,
  tokenType?: string,
  used?: boolean,
  type?: ChipType,
  clickFunction?: boolean,
  isOneLined?: boolean,
) => {
  return `
    ${!isOneLined ? "rounded-md bg-gray-300 dark:bg-gray-800 py-1 px-2" : ""}
    text-xl font-extrabold inline-block
    ${!used && clickFunction ? "cursor-pointer" : ""}
    ${tokenType ? tokenTypeToTailwindClass(tokenType) : ""}
    ${status && !isOneLined && type === "option" ? getStatusClass(status) : ""}
`
}

const getStatusClass = (status?: AnswerStatus) => {
  switch (status) {
    case "selected":
      return "border-2 border-b-2 border-blue-500 mt-[2px]"
    case "correct":
      return "border-2 border-b-2 border-lime-500"
    case "wrong":
      return "border-2 border-b-2 border-red-500"
    case "used":
      return "border-2 border-b-2 border-gray-800"
    case "filled":
      return "border-0"
    case "neutral":
      return "border-2 border-b-4 border-gray-500"
    default:
      return ""
  }
}
