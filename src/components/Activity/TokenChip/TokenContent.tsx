import { OptionWithTokens, Token } from "@/components/TokenColors/highlightCode"
import React, { FC } from "react"
import { LineBreakContent } from "./LineBreakContent"
import { TabContent } from "./TabContent"
import { GapContent } from "./GapContent"
import { TextOptionContent } from "./TextOptionContent"
import { CodeOptionContent } from "./CodeOptionContent"

type TokenContentProps = {
  token: Token
  optionType: OptionWithTokens["type"]
  onClick?: () => void
  className?: string
}
export const TokenContent: FC<TokenContentProps> = ({ token, optionType, onClick, className }) => {
  if (token.content === "\n") {
    return <LineBreakContent className={className} onClick={onClick} />
  }

  if (token.content === "\t") {
    return <TabContent className={className} onClick={onClick} />
  }

  if (token.type === "gap") {
    return <GapContent token={token} onClick={onClick} />
  }

  if (optionType === "TextOption") {
    return <TextOptionContent token={token} onClick={onClick} className={className} />
  }

  if (optionType === "CodeOption") {
    return <CodeOptionContent token={token} onClick={onClick} className={className} />
  }

  if (optionType === "GapOption") {
    return <GapContent token={token} onClick={onClick} className={className} isFilled />
  }

  return null
}
