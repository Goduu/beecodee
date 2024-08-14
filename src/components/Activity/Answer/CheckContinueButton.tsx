import React, { FC } from 'react'
import { Button } from '@/components/Button'

type CheckContinueButtonProps = {
    isAnswerCorrect: boolean
    handleCheck: () => void
    handleGoToNextActivity: () => void
}
export const CheckContinueButton: FC<CheckContinueButtonProps> = ({ isAnswerCorrect, handleCheck, handleGoToNextActivity }) => {

    if (!isAnswerCorrect) {
        return <Button onClick={handleCheck}>Check</Button>
    }

    return <Button onClick={handleGoToNextActivity}>Continue</Button>

}
