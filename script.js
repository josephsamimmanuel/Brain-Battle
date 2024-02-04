const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "High Tech Modular Language",
        c: "Hyper Transfer Markup Language",
        d: "Hyperlink and Text Markup Language",
        correct: "a",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "Which HTML5 tag is used for creating hyperlinks?",
        a: "< link >",
        b: "< a >",
        c: "< hlink >",
        d: "< url >",
        correct: "b",
    },
    {
        question: "In HTML5, which attribute is used to define the alternative text for an image?",
        a: "alt",
        b: "title",
        c: "text",
        d: "description",
        correct: "a",
    },
    {
        question: "What is the purpose of the element in HTML5?",
        a: "Represents a navigation menu",
        b: "Specifies a new paragraph",
        c: "Defines a navigation link",
        d: "Indicates a highlighted text",
        correct: "a",
    },
    {
        question: "Which HTML5 tag is used to create an unordered list?",
        a: "< list >",
        b: "< ul >",
        c: "< ol >",
        d: "< li >",
        correct: "b",
    },
    {
        question: "Which HTML5 attribute is used to provide additional information about an element, such as a tooltip?",
        a: "title ",
        b: "alt",
        c: "description",
        d: "tooltip",
        correct: "a",
    },
    {
        question: "What is the purpose of the HTML5 < footer > tag?",
        a: "Represents a footer cell in a table",
        b: "Defines a footer for a document or a section",
        c: "Specifies a fixed position for an element",
        d: "Indicates a lower-level heading",
        correct: "b",
    },
    {
        question: "What is the purpose of the HTML5 < main > element?",
        a: "Defines the main content of a document ",
        b: "Specifies the main heading of a page",
        c: "Represents a main section in an article",
        d: "Indicates the primary navigation links",
        correct: "a",
    },
    {
        question: "How can you include comments in HTML5?",
        a: "< !-- comment -- > ",
        b: "/ comment",
        c: "/* comment */",
        d: "''' comment '''",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2 style={{"color:white;"}}>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})