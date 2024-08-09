import { FC } from 'react'
import { Token } from '../token_colors/highlightCode'
import { TokenWrapper } from './TokenChipWrapper'
import { tokenTypeToTailwindClass } from '../token_colors/tokenToTailwindClass'

type TokenTextProps = {
    token: Token
    onClick?: () => void
    className?: string
}
export const TokenText: FC<TokenTextProps> = ({ token, onClick, className = "" }) => {

    if (token.content === "\n") {
        return <br />;
    }

    const renderGapContent = () => (
        <p className="text-opacity-0 text-red-50">
            {'_'.repeat(Number(token.content))}
        </p>
    );

    const renderTokenContent = () => {
        switch (token.content) {
            case '\n':
                return <br />;
            default:
                return token.type === 'gap' ? renderGapContent() : token.content.replace(/ /g, '\u00A0');
        }
    };

    return (
        <span className={`${token.type ? tokenTypeToTailwindClass(token.type) : ''} text-xl font-extrabold py-1`} >
            {renderTokenContent()}
        </span>
    );
}
