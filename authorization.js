function createAuthorizationForm() {
    const formAuthorization = document.createElement('form')
    const pName = document.createElement('p')
    const inputName = document.createElement('input')
    const pErrorName = document.createElement('p')
    const buttonAuthorization = document.createElement('button')

    formAuthorization.classList.add('formAuthorization')
    pName.classList.add('pName')
    inputName.classList.add('inputName')
    pErrorName.classList.add('pErrorName')
    buttonAuthorization.classList.add('buttonAuthorization')
    buttonAuthorization.classList.add('buttonPassiv')

    pName.textContent = 'Введите свое имя'
    buttonAuthorization.textContent = 'Продолжить'

    formAuthorization.append(pName)
    formAuthorization.append(inputName)
    formAuthorization.append(pErrorName)
    formAuthorization.append(buttonAuthorization)

    return {
        formAuthorization,
        pName,
        inputName,
        pErrorName,
        buttonAuthorization
    }
}

function correctInput() {
    if (formAuthorization.inputName.value.trim() === '') {
        buttonAutho.className = ''
        buttonAutho.classList.add('buttonPassiv')
        perrorButton.textContent = 'Заполните поле'
        perrorButton.style.color = 'red'
    } else {
        buttonAutho.className = ''
        buttonAutho.classList.add('buttonActive')
    }
}

function createAppAuthorization() {
    const containerAuthorization = document.getElementById('authorization')

    const formAuthorization = createAuthorizationForm()
    containerAuthorization.append(formAuthorization.formAuthorization)
    
    const buttonAutho = formAuthorization.buttonAuthorization
    const perrorButton = formAuthorization.pErrorName
    const inputName = formAuthorization.inputName

    buttonAutho.disabled = true

    inputName.addEventListener('input', () => {
        if (inputName.value.trim() !== '') {
            buttonAutho.disabled = false
            buttonAutho.className = ''
            buttonAutho.classList.add('buttonActive')
            perrorButton.textContent = ""
        } else {
            buttonAutho.disabled = true
            buttonAutho.className = ''
            buttonAutho.classList.add('buttonPassiv')
            perrorButton.textContent = "Заполните поле"
            perrorButton.style.color = 'red'
        }
    })

    buttonAutho.addEventListener('click', (even) => {
        event.preventDefault()
        if (inputName.value.trim() !== '') {
            window.location.href = 'testWndow.html'
        }
    })
}

document.addEventListener('DOMContentLoaded', createAppAuthorization)

