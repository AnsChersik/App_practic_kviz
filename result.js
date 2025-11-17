
function createAppResult() {
    const containerResult = document.getElementById('result')
    const userAnswers = JSON.parse(localStorage.getItem('userAns')) || []
    const userName = localStorage.getItem('username') || 'Анонимный пользователь'
    let countCorrect = 0

    userAnswers.forEach(answer => {
        if (answer.question.answers[answer.indexAns].correct) {
            countCorrect++;
        }
    })

    const h1 = document.createElement('h1')
    h1.textContent = 'Поздраляем, ' + userName + '!Вы прошли квиз'
    const pResult = document.createElement('p')

    pResult.textContent = 'Ваш результат: ' + countCorrect + ' баллов из ' + userAnswers.length

    containerResult.append(h1)
    containerResult.append(pResult)

    userAnswers.forEach((answer, index) => {
        const divQuestion = document.createElement('div')
        divQuestion.classList.add('divQuestion')

        const questionText = document.createElement('p')
        let numQuest = index + 1
        questionText.classList.add('questionText')
        questionText.innerHTML = 'Вопрос ' + numQuest + ': ' + answer.question.question + '?'
        divQuestion.append(questionText)

        answer.question.answers.forEach((ans, ansIndex) => {
            const ansText = document.createElement('p')
            ansText.textContent = ans.text + ' - ' + ans.explantion
            if (ans.correct) {
                ansText.classList.add('correct')
            }
            if (ansIndex === answer.indexAns && !ans.correct) {
                ansText.classList.add('uncorrect')
            }
            divQuestion.append(ansText)
        })

        const ansExplanation = document.createElement('p')
        ansExplanation.innerHTML = answer.question.explanation
        ansExplanation.classList.add('Explanation')
        divQuestion.append(ansExplanation)
        containerResult.append(divQuestion)
    })

    const buttonRestart = document.createElement('button')
    buttonRestart.classList.add('buttonRestart')
    buttonRestart.textContent = 'Начать заново'

    buttonRestart.addEventListener('click', () => {
        localStorage.removeItem('userAns')
        localStorage.removeItem('username')
        window.location.href = 'authorization.html';
    })

    containerResult.append(buttonRestart)

}






document.addEventListener('DOMContentLoaded', createAppResult);