var startButton = document.getElementById('start')
var guideEl = document.getElementById('guide')
var quizEl = document.getElementById('quiz')
var continueButton = document.getElementById('continue')
var exitButton = document.getElementById('exit')
var nextBtn = document.getElementById('next')
var questionEl = document.getElementById('question')
var answersEl = document.getElementById('answerList')
var timerEl = document.getElementById('time')
var currentQuestion;
var randomQuestion;
var timerCount = 75;

startButton.addEventListener('click', guide)
continueButton.addEventListener('click', startGame)
exitButton.addEventListener('click', exit)

function guide() {
    startButton.classList.add('hide');
    guideEl.classList.remove('hide');
}

function startGame() {
    guideEl.classList.add('hide');
    quizEl.classList.remove('hide')
    randomQuestion = questions.sort(() => Math.random() - .5)
    currentQuestion = 0;
    randomizeQuestion();

    var timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function randomizeQuestion(){
    clearAnswers()
    setQuestion(randomQuestion[currentQuestion])
}

function setQuestion(question) {
    questionEl.innerText = question.question

        for (let i = 0; i<4;i++) {
            var button = document.createElement('button');
            var answer = questions[0].answers[i];
            button.innerText= answer.text;
            button.classList.add('btn');
            answersEl.appendChild(button);
            
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }

        button.addEventListener('click', selectAnswer);
        }
    }


    function clearAnswers() {
        nextBtn.classList.add('hide')
        while (answersEl.firstChild) {
            answersEl.removeChild(answersEl.firstChild)
        }
    }


    function selectAnswer(e,) {

        var userAnswer = e.target
        var correct = userAnswer.dataset.correct
        setStatus(document.body, correct);
        console.log(userAnswer)

    }

    function setStatus(element, correct) {
        clearStatus(element)
        if (correct) {
            element.classList.add('correct');
        } else {
            element.classList.add('wrong');
        }
    }
    
    function clearStatus(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')
    }
var questions = [
    {
        question: 'How do you create a function in JavaScript?',
        answers: [
            {text: 'function myFunction()', correct: true},
            {text: 'function=myFunction()', correct: false},
            {text: 'function:myFunction()', correct: false},
            {text: 'var function=myFunction()', correct: false}
        ]
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            {text: 'js tag', correct: false},
            {text: 'javascript tag', correct: false},
            {text: 'script tag', correct: true},
            {text: 'scripting tag', correct: false}
        ]
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            {text: 'msg("Hello World");', correct: false},
            {text: 'alert("Hello World");', correct: true},
            {text: 'msgBox("Hello World");', correct: false},
            {text: 'alertBox("Hello World");', correct: false}
        ]
    },
    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        answers: [
            {text: 'if i <>5', correct: false},
            {text: 'if(i!=5)', correct: true},
            {text: 'if i=! 5 then', correct: false},
            {text: 'if(i<>5)', correct: false}
        ]
    },
    {
        question: 'How do you round the number 7.25, to the nearest integer?',
        answers: [
            {text: 'Math.round(7.25)', correct: true},
            {text: 'Math.rnd(7.25)', correct: false},
            {text: 'round(7.25)', correct: false},
            {text: 'rnd(7.25)', correct: false}
        ]
    },
    {
        question: 'How do you add a comment in a JavaScript?',
        answers: [
            {text: '//This is a comment', correct: true},
            {text: '"This is a comment"', correct: false},
            {text: '<!--This is a comment-!>', correct: false},
            {text: '<This is a comment>', correct: false}
        ]
    },
    {
        question: 'How does a FOR loop start?',
        answers: [
            {text: 'for (i=0;i<=5;i++)', correct: false},
            {text: 'for i = 1 to 5', correct: false},
            {text: 'for (i=0;i<=5)', correct: true},
            {text: 'for (i <=5;i++)', correct: false}
        ]
    },
    {
        question: 'What is the correct way to write a JavaScript array?',
        answers: [
            {text: 'var colors = ["red, "green", "blue"]', correct: true},
            {text: 'var colors = (1:"red",2:"green",3:"blue")', correct: false},
            {text: 'var colors = "red","green","blue"', correct: false},
            {text: 'var colors = 1=("red),2=("green"),3=("blue")', correct: false}
        ]
    }
]

function exit() {
    window.close();
}