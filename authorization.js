import { createAuthorizationForm } from './modules/createAuthorizationForm.js'


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

    buttonAutho.addEventListener('click', (e) => {
        e.preventDefault()
        if (inputName.value.trim() !== '') {
            localStorage.setItem('username', inputName.value.trim())
            window.location.href = 'testWndow.html'
        }
    })
}

document.addEventListener('DOMContentLoaded', createAppAuthorization)

