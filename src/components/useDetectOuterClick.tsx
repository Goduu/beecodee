import { RefObject, useEffect } from 'react'

type DetectOuterClickProps = {
    ref?: RefObject<HTMLDivElement>
    onOuterClick: () => void
}
export const useDetectOuterClick = ({ onOuterClick, ref }: DetectOuterClickProps) => {

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (target && ref?.current && !ref.current.contains(target)) {
                onOuterClick()
            }
        }
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onOuterClick()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

}
