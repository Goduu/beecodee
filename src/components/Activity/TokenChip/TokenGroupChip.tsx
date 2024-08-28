import React, { FC } from "react";
import { OptionWithTokens } from "../../TokenColors/highlightCode";
import { cn } from "@/lib/utils";
import { getClassNames } from "./getClassNames";
import { OneLineContent } from "./OneLineContent";
import { TokenType } from "./types";
import { OptionTokensContent } from "./OptionTokensContent";

type TokenGroupChipProps = {
  optionWithToken: OptionWithTokens;
  type?: TokenType;
  className?: string;
  isOneLined?: boolean;
  onClick?: () => void;
};

export const TokenGroupChip: FC<TokenGroupChipProps> = ({
  optionWithToken,
  onClick,
  type = "option",
  className = "",
  isOneLined,
}) => {
  const commonClassNames = cn(
    getClassNames({ status: optionWithToken.status, type, hasClickFunction: !!onClick, isOneLined }),
    className,
  )

  if (isOneLined) {
    return (<OneLineContent optionWithToken={optionWithToken} type={type} onClick={onClick} className={commonClassNames} />
    );
  }

  return (<OptionTokensContent optionWithToken={optionWithToken} onClick={onClick} className={commonClassNames} />
  );
};
