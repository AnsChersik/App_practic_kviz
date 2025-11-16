let testsArray = [
    {
        id: 1,
        question: 'Сколько планет в Солнечной системене',
        image: '',
        answers: [
            { text: 6, correct: false, explantion: 'Неверно' },
            { text: 8, correct: true, explantion: 'Верно' },
            { text: 9, correct: false, explantion: 'Неверно' },
            { text: 5, correct: false, explantion: 'Неверно' },
        ],
        explanation: '1. Меркурий, 2. Венера, 3. Земля, 4. Марс, 5. Юпитер, 6. Сатурн, 7. Уран, 8. Нептун.',
    },
    {
        id: 2,
        question: 'Какая планета самая большая в Солнечной системе',
        image: '',
        answers: [
            { text: 'Венера', correct: false, explantion: 'Неверно' },
            { text: 'Сатурн', correct: false, explantion: 'Неверно' },
            { text: 'Нептун', correct: false, explantion: 'Неверно' },
            { text: 'Юпитер', correct: true, explantion: 'Верно' },
        ],
        explanation: 'Самая большая планета в Солнечной системе это Юпитер. <br>Площадь Венеры = 460,2 млн кв. км, порщадь Сатурна =  61420 млн кв. км, площадь Нептуна = 7618 млн кв. км, площадь Юпитера = 61420 млн кв. км',
    },
    {
        id: 3,
        question: 'Сколько спутников у Сатурна',
        image: '',
        answers: [
            { text: '274', correct: true, explantion: 'Верно' },
            { text: '56', correct: false, explantion: 'Неверно' },
            { text: '2', correct: false, explantion: 'Неверно' },
            { text: '90', correct: false, explantion: 'Неверно' },
        ],
        explanation: 'По данным 2025 года, у Сатурна 274 спутника.',
    },
    {
        id: 4,
        question: 'Какая планета не входит в Солнечную систмеу',
        image: '',
        answers: [
            { text: 'Плутон', correct: true, explantion: 'Верно' },
            { text: 'Венера', correct: false, explantion: 'Неверно' },
            { text: 'Нептун', correct: false, explantion: 'Неверно' },
            { text: 'Солнце', correct: false, explantion: 'Неверно' },
        ],
        explanation: 'В Солнечну систему входят: Меркрий, Венера, Земля, Марс, Юпитер, Стуран, Уран, Непнут. <br>Плутон лишили статуса планеты, потому что он не соответствовал критериям, определяющим планету: не «очистил» свою орбиту от других объектов.',
    },
    {
        id: 5,
        question: 'В чем измеряется расстояние в космосе',
        image: '',
        answers: [
            { text: 'Километры', correct: false, explantion: 'Неверно' },
            { text: 'Метры', correct: false, explantion: 'Неверно' },
            { text: 'Квадратные километры', correct: true, explantion: 'Верно' },
            { text: 'Световые года', correct: false, explantion: 'Неверно' },
        ],
        explanation: 'В коссмосе расстояние измеряется в световых годах',
    },
]

let arrayAnswer = []
let newArrayQuestion = []
let indexQuestion = 0
let ansewerIndex = null

const questionTitle = document.getElementById('questionTitle')
const questionImg = document.getElementById('questionImg')
const answersConteiner = document.getElementById('answersConteiner')
const questionButton = document.getElementById('questionButton')
const divquiz = document.getElementById('quiz')

function randomQuestion(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
}


function creatwQuestion() {
    
    answersConteiner.innerHTML = ''
    ansewerIndex = null

    const question = newArrayQuestion[indexQuestion]
    questionTitle.textContent = question.question
    questionImg.src = question.image || ''
    const answers = []
    question.answers.forEach(answer => {
        answers.push(answer)
    })

    randomQuestion(answers)

    answers.forEach((answer, index) => {
        const label = document.createElement('label')
        const radio = document.createElement('input')
        radio.type = 'radio'
        radio.name = 'answer'
        label.classList.add('label')

        radio.addEventListener('change', () => {
            ansewerIndex = index
            questionButton.disabled = false
            questionButton.classList.add('buttonActiv')
        })

        label.textContent = answer.text
        label.append(radio)
        answersConteiner.append(label)
    })

    questionButton.disabled = true
    questionButton.classList.add('buttonPassiv')
    if (indexQuestion == newArrayQuestion.length - 1) {
        questionButton.textContent = 'Завершить тест'
    } else {
        questionButton.textContent = 'Следующий вопрос'
    }
}

questionButton.addEventListener('click', () => {
    if (ansewerIndex === null) return

    const objectAns = {
        question: newArrayQuestion[indexQuestion],
        indexAns: ansewerIndex
    }
    arrayAnswer.push(objectAns)

    if (indexQuestion == newArrayQuestion.length - 1) {
        localStorage.setItem('userAns', JSON.stringify(arrayAnswer))
        window.location.href = 'result.html';
    } else {
        indexQuestion++
        creatwQuestion()
    }
})

function createAppQuiz() {
    const userName = localStorage.getItem('username') || 'Анонимный пользователь'
    newArrayQuestion = []
    testsArray.forEach(question => {
        newArrayQuestion.push(question)
    })
    indexQuestion = 0
    arrayAnswer = []
    creatwQuestion()
}

document.addEventListener('DOMContentLoaded', createAppQuiz)
