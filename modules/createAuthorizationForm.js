export function createAuthorizationForm() {
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