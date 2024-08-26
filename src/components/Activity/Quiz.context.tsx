"use client"
import { createContext, FC, ReactNode, useContext, useState } from 'react';

type QuizContextProps = {
    checkFlag: boolean;
    toggleCheckFlag: () => void; // Add a function to toggle the flag
}

type QuizContextWrapperProps = {
    children: ReactNode;
}

const QuizContext = createContext<QuizContextProps>({
    checkFlag: false,
    toggleCheckFlag: () => { }, // Provide a default no-op function
});

export const QuizContextWrapper: FC<QuizContextWrapperProps> = ({ children }) => {
    const [checkFlag, setCheckFlag] = useState(false);

    const toggleCheckFlag = () => {
        setCheckFlag(prev => !prev); // Toggle the checkFlag state
    };

    return (
        <QuizContext.Provider value={{ checkFlag, toggleCheckFlag }} >
            {children}
        </QuizContext.Provider>
    );
}

export function useQuizContext() {
    return useContext(QuizContext);
}
