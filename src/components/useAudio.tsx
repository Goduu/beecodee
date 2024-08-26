import { useEffect, useState } from "react";

export const useAudio = () => {
    const [correctAnswerSound, setCorrectAnswerSound] = useState<HTMLAudioElement | null>(null);
    const [wrongAnswerSound, setWrongAnswerSound] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
        const correctSound = new Audio('/sounds/correct.mp3');
        const wrongSound = new Audio('/sounds/wrong.mp3');

        const handleError = (error: Event) => {
            const audioElement = error.target as HTMLAudioElement;
            console.error(`Failed to load audio file: ${audioElement.src}`, error);
        };

        correctSound.addEventListener('error', handleError);
        wrongSound.addEventListener('error', handleError);

        setCorrectAnswerSound(correctSound);
        setWrongAnswerSound(wrongSound);

        return () => {
            correctSound.removeEventListener('error', handleError);
            wrongSound.removeEventListener('error', handleError);

            // Clean up audio elements
            correctSound.pause();
            wrongSound.pause();
            setCorrectAnswerSound(null);
            setWrongAnswerSound(null);
        };
    }, []);

    const playSound = (sound: HTMLAudioElement | null) => {
        if (sound) {
            sound.volume = 0.4;
            sound.play().catch(error => console.error('Error playing sound:', error));
        }
    };

    return { correctAnswerSound, wrongAnswerSound, playSound };
};
