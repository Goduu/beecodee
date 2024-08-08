import { FC } from 'react'
import { Token } from '../token_colors/highlightCode'
import { TokenWrapper } from './TokenChipWrapper'

type TokenChipProps = {
    token: Token
    onClick?: () => void
    className?: string
}
export const TokenChip: FC<TokenChipProps> = ({ token, onClick, className = "" }) => {

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
            case ' ':
                return <>&nbsp;</>;
            case '\n':
                return <br />;
            default:
                return token.type === 'gap' ? renderGapContent() : token.content;
        }
    };

    return (
        <TokenWrapper className={className} tokenType={token.type} onClick={onClick}>
            {renderTokenContent()}
        </TokenWrapper>
    );
}
