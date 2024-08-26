import React, { FC, Fragment } from "react"
import { AnswerStatus } from "./Answer/types"
import { tokenTypeToTailwindClass } from "../TokenColors/tokenToTailwindClass"
import { OptionWithTokens, Token } from "../TokenColors/highlightCode"

type TokenGroupChipProps = {
  id: string
  optionWithToken: OptionWithTokens
  className?: string
  isOneLined?: boolean
  onClick?: () => void
}

export const TokenGroupChip: FC<TokenGroupChipProps> = ({
  id,
  optionWithToken,
  onClick,
  className = "",
  isOneLined,
}) => {
  if (isOneLined) {
    return (
      <span
        key={id}
        onClick={onClick}
        className={`flex cursor-pointer rounded-md bg-gray-300 px-2 py-1 dark:bg-gray-800 ${optionWithToken.status && getStatusClass(optionWithToken.status)}`}
      >
        {optionWithToken.tokens.map((token, index) => {
          return (
            <div key={`${id}-${optionWithToken.id}-${index}`}>
              {renderTokenContent(index, token, optionWithToken.status || "neutral", () => {}, isOneLined)}
            </div>
          )
        })}
      </span>
    )
  }

  return (
    <>
      {optionWithToken.tokens.map((token, index) => {
        return renderTokenContent(index, token, optionWithToken.status || "neutral", onClick, isOneLined)
      })}
    </>
  )
}

const renderGapContent = (id: string | number, token: Token) => {
  const classNames = getClassNames("neutral", token.type || "", false, false, false)

  return (
    <span key={id} className={`text-slate-50 text-opacity-0 ${classNames}`}>
      {"_".repeat(Number(token.size))}aa
      {/* {'_'.repeat(Number(token.size))} */}
    </span>
  )
}

const renderTokenContent = (
  id: string | number,
  token: Token,
  status?: AnswerStatus,
  onClick?: () => void,
  isOneLined?: boolean,
) => {
  const classNames = getClassNames(status, token.type || "", false, !!onClick, isOneLined)

  switch (token.content) {
    case "\n":
      return (
        <Fragment key={id}>
          <span onClick={onClick} className={` text-slate-50 text-opacity-10 ${classNames}`}>
            \n
          </span>
          <br />
        </Fragment>
      )
    case "\t":
      return (
        <span key={id} className={`w-14 text-center text-slate-50 text-opacity-10 ${classNames}`} onClick={onClick}>
          \t
        </span>
      )
    default:
      return token.type === "gap" ? (
        renderGapContent(id, token)
      ) : (
        <span key={id} onClick={onClick} className={classNames}>
          {token.content.toString().replace(/ /g, "\u00A0")}
        </span>
      )
  }
}

const getClassNames = (
  status?: AnswerStatus,
  tokenType?: string,
  used?: boolean,
  clickFunction?: boolean,
  isOneLined?: boolean,
) => {
  return `
            ${!isOneLined && "rounded-md bg-gray-300 dark:bg-gray-800 py-1 px-2"}
            text-xl font-extrabold inline-block
            ${!used && clickFunction ? "cursor-pointer" : ""}
            ${tokenType ? tokenTypeToTailwindClass(tokenType) : ""}
            ${status && !isOneLined && getStatusClass(status)}
    `
}

const getStatusClass = (status: AnswerStatus) => {
  switch (status) {
    case "selected":
      return "border-2 border-b-2 border-blue-500 mt-[2px]"
    case "correct":
      return "border-2 border-b-2 border-lime-500 mt-[2px]"
    case "wrong":
      return "border-2 border-b-2 border-red-500 mt-[2px]"
    case "used":
      return "border-2 border-b-2 border-gray-800"
    case "filled":
      return "border-0"
    case "used":
      return "border-0 text-red-50 text-opacity-0 bg-gray-200 dark:bg-gray-500"
    default:
      return "border-2 border-b-4 border-gray-500"
  }
}
