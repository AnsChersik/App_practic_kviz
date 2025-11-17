export function creatwQuestion() {

    answersConteiner.innerHTML = ''
    ansewerIndex = null

    const question = newArrayQuestion[indexQuestion]
    questionTitle.textContent = question.question
    questionImg.src = question.image || ''
    const answers = []
    question.answers.forEach(answer => {
        answers.push(answer)
    })

    answers.forEach((answer, index) => {
        const label = document.createElement('label')
        const radio = document.createElement('input')
        const span = document.createElement('span')
        span.textContent = answer.text
        radio.type = 'radio'
        radio.value = index
        radio.name = 'answer'
        label.classList.add('label')

        radio.addEventListener('change', () => {
            ansewerIndex = index
            questionButton.disabled = false
            questionButton.classList.remove('buttonPassiv')
            questionButton.classList.add('buttonActiv')
        })

        label.append(radio)
        label.append(span)
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