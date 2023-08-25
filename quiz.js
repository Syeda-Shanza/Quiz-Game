const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Rembrandt"],
        correctAnswer: "Leonardo da Vinci"
    }
];

nextButton.addEventListener('click', showNextQuestion);

function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        showQuestion(question);
        currentQuestionIndex++;
        nextButton.style.display = 'none';
    } else {
        showScore();
    }
}

function showQuestion(question) {
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option, question.correctAnswer));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
    }
    nextButton.style.display = 'block';
}

function showScore() {
    questionElement.textContent = `You scored ${score} out of ${questions.length} questions.`;
    optionsElement.innerHTML = '';
    nextButton.style.display = 'none';
}

showNextQuestion();
