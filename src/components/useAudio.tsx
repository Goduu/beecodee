"use client"

import { useEffect, useState } from "react";

export const useAudio = () => {
    const [correctAnswerSound, setCorrectAnswerSound] = useState<HTMLAudioElement | null>(null);
    const [wrongAnswerSound, setWrongAnswerSound] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
        setCorrectAnswerSound(new Audio('/sounds/correct.mp3'));
        setWrongAnswerSound(new Audio('/sounds/false.mp3'));
    }, []);

    const playSound = (sound: HTMLAudioElement | null) => {
        if (sound) {
            sound.play();
        }
    }

    return { correctAnswerSound, wrongAnswerSound, playSound };
}