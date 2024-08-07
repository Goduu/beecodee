"use client"

import { useEffect, useState } from "react";

export const useAudio = () => {
    const [correctAnswer, setCorrectAnswer] = useState<HTMLAudioElement | null>(null);
    const [wrongAnswer, setWrongAnswer] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
        setCorrectAnswer(new Audio('/sounds/correct.mp3'));
        setWrongAnswer(new Audio('/sounds/false.mp3'));
    }, []);

    const playSound = (sound: HTMLAudioElement | null) => {
        if (sound) {
            sound.play();
        }
    }

    return { correctAnswer, wrongAnswer, playSound };
}