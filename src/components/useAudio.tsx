"use client"

import { useEffect, useState } from "react";

export const useAudio = () => {
    const [correctAnswerSound, setCorrectAnswerSound] = useState<HTMLAudioElement | null>(null);
    const [wrongAnswerSound, setWrongAnswerSound] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
        setCorrectAnswerSound(new Audio('/sounds/correct.mp3'));
        setWrongAnswerSound(new Audio('/sounds/wrong.mp3'));
    }, []);

    const playSound = (sound: HTMLAudioElement | null) => {
        if (sound) {
            sound.volume = 0.4
            sound.play();
        }
    }

    return { correctAnswerSound, wrongAnswerSound, playSound };
}