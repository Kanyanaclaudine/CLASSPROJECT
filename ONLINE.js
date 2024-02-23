const readline = require('readline');

const kc = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const multipleChoice = [
    {
        question: 'what is your favorite food?',
        options: ['rice', 'chips', 'potatoes', 'meat'],
        answer: 3
    },
    {
        question: 'Do you like coding?',
        options: ['yes', 'no'],
        answer: 1
    }
];

let score = 0;
let currentQuestionIndex = 0;

const displayRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * multipleChoice.length);
    const randomQuestion = multipleChoice[randomIndex];
    console.log(randomQuestion.question);
    randomQuestion.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });
    kc.question('Enter your answer (by option): ', (userAnswer) => {
        checkAnswer(parseInt(userAnswer), randomQuestion.answer);
    });
};

const checkAnswer = (userAnswer, correctAnswer) => {
    if (userAnswer === correctAnswer || userAnswer === correctAnswer + 1) {
        console.log("Correct!");
        score++;
    } else {
        console.log("Incorrect!");
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < multipleChoice.length) {
        displayRandomQuestion();
    } else {
        endMultipleChoice();
        kc.close();
    }
};

const endMultipleChoice = () => {
    //console.log(`Multiple Choice ended. Your score: ${score}/${multipleChoice.length}`);
};

displayRandomQuestion();