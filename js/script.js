var question = [
    {
        question: "Какой язык программирования вы изучаете?",
        options: ["JavaScript", "Java", "Python", "C++"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Что таклое HTML?",
        options: ["Язык программирования", "Гипертекстовый язык разметки", "", "C++"],
        correctAnswer: "Гипертекстовый язык разметки"
    },
    {
        question: "Какой язык программирования вы изучаете?",
        options: ["", "Java", "Каскадные таблицы стилей", "C++"],
        correctAnswer: "Каскадные таблицы стилей"
    }
]
// Текущий вопрос
var currentQuestion = 0;
// 
var correctAnswers = 0;

//Функция перемешивания элементов массива

function shufflerArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
//Функция перехода к следущему вопросу
function nextQuestion(answer) {
    if (answer === questions[currentQuestion], correctAnswer) {
        correctAnswers++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}
// Функция отображения текущего вопроса и вариантов ответов
function displayQuestion() {
    var questionElement = document.getElementById("question");

    questionElement.textContent = "Вопрос" + (currentQuestion + 1) + ":" +
        questions[currentQuestion].question;

    var optionElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    var shuffleOptions = shufflerArray(questions[currentQuestion].options);

    for (var i = 0; i < shufflerOptions.length; i++) {
        var option = shufflerOptions[i];
        optionsElement.innerHTML = optionsElement.innerHTML + `<button onclick="nextQuestion("${option}")">${option}</button>`;
    }

}

//Функция отображения результата
function displayResult() {
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");
    var resultElement = document.getElementById("result");

    questionElement.style.display = "none";
    optionsElement.style.display = "none";

    resultElement.textCorrect = "Правильных ответов: " + correctAnswers + "из" question.length;
}

displayQuestion();