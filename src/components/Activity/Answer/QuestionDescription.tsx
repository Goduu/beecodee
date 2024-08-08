import React, { FC } from 'react'

type QuestionDescriptionProps = {
    description: string
}

export const QuestionDescription: FC<QuestionDescriptionProps> = ({ description }) => {
    return (
        <div className='text-xl sm:text-2xl font-extrabold flex-wrap'>
            {description}
        </div>
    )
}
