const correctAnswer = new Audio('/sounds/correct.mp3')
const wrongAnswer = new Audio('/sounds/false.mp3')


const playSound = (sound: HTMLAudioElement) => {
    sound.play()
}

export { correctAnswer, wrongAnswer, playSound }
