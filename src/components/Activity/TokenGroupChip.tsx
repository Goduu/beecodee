import React, { FC } from 'react'
import { AnswerStatus } from './Answer/types'
import { tokenTypeToTailwindClass } from '../TokenColors/tokenToTailwindClass'
import { OptionWithTokens, Token } from '../TokenColors/highlightCode'

type TokenGroupChipProps = {
    optionWithToken: OptionWithTokens
    className?: string
    isOneLined?: boolean
    onClick?: () => void
}

export const TokenGroupChip: FC<TokenGroupChipProps> = ({ optionWithToken, onClick, className = "", isOneLined }) => {

    if (isOneLined) {
        return (
            <span
                onClick={onClick}
                className={`flex bg-gray-300 dark:bg-gray-800 rounded-md py-1 px-2 cursor-pointer ${optionWithToken.status && getStatusClass(optionWithToken.status)}`}>
                {optionWithToken.tokens.map((token, index) => {
                    return (
                        renderTokenContent(token, optionWithToken.status || "neutral", () => { }, isOneLined)
                    )
                })}
            </span>
        )
    }

    return (
        <>
            {optionWithToken.tokens.map((token, index) => {
                return (
                    renderTokenContent(token, optionWithToken.status || "neutral", onClick, isOneLined)
                )
            }
            )}
        </>
    );
}

const renderGapContent = (token: Token) => {
    const classNames = getClassNames("neutral", token.type || "", false, false, false)

    return (
        <span className={`text-opacity-0 text-slate-50 ${classNames}`}>
            {'_'.repeat(Number(token.size))}aa
            {/* {'_'.repeat(Number(token.size))} */}
        </span>
    );
}

const renderTokenContent = (token: Token, status?: AnswerStatus, onClick?: () => void, isOneLined?: boolean) => {
    const classNames = getClassNames(status, token.type || "", false, !!onClick, isOneLined)

    switch (token.content) {
        case '\n':
            return <>
                <span onClick={onClick} className={` text-opacity-10 text-slate-50 ${classNames}`}>\n</span>
                <br />
            </>
        case '\t':
            return <>
                <span className={`w-14 text-center text-opacity-10 text-slate-50 ${classNames}`} onClick={onClick}>\t</span>
            </>
        default:
            return token.type === 'gap' ? renderGapContent(token) : (
                <span onClick={onClick} className={classNames}>
                    {token.content.toString().replace(/ /g, '\u00A0')}
                </span >)
    }
};

const getClassNames = (status?: AnswerStatus, tokenType?: string, used?: boolean, clickFunction?: boolean, isOneLined?: boolean) => {
    return `
            ${!isOneLined && "rounded-md bg-gray-300 dark:bg-gray-800 py-1 px-2"}
            text-xl font-extrabold inline-block
            ${!used && clickFunction ? 'cursor-pointer' : ''}
            ${tokenType ? tokenTypeToTailwindClass(tokenType) : ''}
            ${status && !isOneLined && getStatusClass(status)}
    `;
};

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