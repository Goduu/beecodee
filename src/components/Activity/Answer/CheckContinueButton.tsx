import React, { FC } from 'react'
import { AnswerStatus } from './types'
import { Button } from '@/components/Button'

type CheckContinueButtonProps = {
    status: AnswerStatus
    handleCheck: () => void
    handleGoToNextActivity: () => void
}
export const CheckContinueButton: FC<CheckContinueButtonProps> = ({ status, handleCheck, handleGoToNextActivity }) => {

    if (status === 'neutral' || status === 'wrong') {
        return <Button onClick={handleCheck}>Check</Button>
    }

    return <Button onClick={handleGoToNextActivity}>Continue</Button>

}
