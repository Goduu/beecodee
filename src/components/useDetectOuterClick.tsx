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

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

}
