import { OptionWithTokens } from "@/components/TokenColors/highlightCode"
import React, { FC } from "react"
import { TokenContent } from "./TokenContent"
import { tokenTypeToTailwindClass } from "@/components/TokenColors/tokenToTailwindClass"

type OptionTokensContentProps = {
  optionWithToken: OptionWithTokens
  onClick?: () => void
  className?: string
}
export const OptionTokensContent: FC<OptionTokensContentProps> = ({ optionWithToken, onClick, className }) => {
  return optionWithToken.tokens.map((token, index) => {
    const tokenTypeClass = tokenTypeToTailwindClass(token.type)

    return (
      <TokenContent
        key={`${token.content.toString()}-${index}`}
        token={token}
        optionType={optionWithToken.type}
        onClick={onClick}
        className={`${tokenTypeClass} ${className}`}
      />
    )
  })
}
