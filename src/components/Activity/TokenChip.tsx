import { FC } from 'react'
import { Token } from '../TokenColors/highlightCode'
import { TokenWrapper } from './TokenChipWrapper'

type TokenChipProps = {
    token: Token
    onClick?: () => void
    className?: string
    used?: boolean
}
export const TokenChip: FC<TokenChipProps> = ({ token, onClick, className = "", used = false }) => {

    if (token.content === "\n") {
        return <br />;
    }

    const renderGapContent = () => (
        // text-white does not have opacity
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
        <TokenWrapper className={className} tokenType={token.type} used={used} onClick={onClick}>
            {renderTokenContent()}
        </TokenWrapper>
    );
}
