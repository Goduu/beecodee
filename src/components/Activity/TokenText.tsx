import { FC } from 'react'
import { Token } from '../TokenColors/highlightCode'
import { TokenWrapper } from './TokenChipWrapper'
import { tokenTypeToTailwindClass } from '../TokenColors/tokenToTailwindClass'

type TokenTextProps = {
    token: Token
    onClick?: () => void
    className?: string
}
export const TokenText: FC<TokenTextProps> = ({ token, onClick, className = "" }) => {

    const renderGapContent = () => (
        <p className="text-opacity-0 text-red-50">
            {'_'.repeat(Number(token.content))}
        </p>
    );

    const renderTokenContent = () => {
        switch (token.content) {
            case '\n':
                return <br />;
            case '\t':
                return <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;
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
