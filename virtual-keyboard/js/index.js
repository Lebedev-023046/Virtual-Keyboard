import { keys as keysContent } from "./keys.js"
console.log(keysContent)

const body = document.querySelector('body')

const container = document.createElement('div')
container.classList.add('container')

const title = document.createElement('div')
title.innerHTML = '<h1>Virtual Keyboard</h1>'
title.classList.add('title')
body.appendChild(title)

const textArea = document.createElement('textarea')
textArea.classList.add('textarea')
textArea.setAttribute('keyss', '5')
textArea.setAttribute('columns', '45')
textArea.setAttribute('autofocus', 'true')
container.appendChild(textArea)

const keyboard = document.createElement('div')
keyboard.classList.add('keyboard')
container.appendChild(keyboard)

const keys = document.createElement('div')
keys.classList.add('key-block')
keyboard.appendChild(keys)


body.appendChild(container)

//fill keyboard
for (let i=0;i<64;i++) {
    if (i === 13) {
        let key = document.createElement('span')
        key.innerHTML = keysContent[i][`eng`]
        keys.appendChild(key)
        key.classList.add('key')
        key.classList.add('backspace')
    }
    else if (i === 14) {
        let key = document.createElement('span')
        key.innerHTML = keysContent[i][`eng`]
        keys.appendChild(key)
        key.classList.add('key')
        key.classList.add('tab')
    }
    else if (i === 28) {
        let key = document.createElement('span')
        key.innerHTML = keysContent[i][`eng`]
        keys.appendChild(key)
        key.classList.add('key')
        key.classList.add('del')
    }
    else if (i === 29) {
        let key = document.createElement('span')
        key.innerHTML = keysContent[i][`eng`]
        keys.appendChild(key)
        key.classList.add('key')
        key.classList.add('caps')
    }
    else if (i === 29) {
        let key = document.createElement('span')
        key.innerHTML = keysContent[i][`eng`]
        keys.appendChild(key)
        key.classList.add('key')
        key.classList.add('caps')
    }
    else if (i === 41) {
        let key = document.createElement('span')
        key.innerHTML = keysContent[i][`eng`]
        keys.appendChild(key)
        key.classList.add('key')
        key.classList.add('enter')
    }
    else if (i === 42) {
        let key = document.createElement('span')
        key.innerHTML = keysContent[i][`eng`]
        keys.appendChild(key)
        key.classList.add('key')
        key.classList.add('shift-l')
    }
    else if (i === 53) {
        let key = document.createElement('span')
        key.innerHTML = keysContent[i][`eng`]
        keys.appendChild(key)
        key.classList.add('key')
        key.classList.add('arr-t')
    }
    else if (i === 54) {
        let key = document.createElement('span')
        key.innerHTML = keysContent[i][`eng`]
        keys.appendChild(key)
        key.classList.add('key')
        key.classList.add('shift-r')
    }
    else if (i === 55) {
        let key = document.createElement('span')
        key.innerHTML = keysContent[i][`eng`]
        keys.appendChild(key)
        key.classList.add('key')
        key.classList.add('ctrl')
    }
    else if (i === 56) {
        let key = document.createElement('span')
        key.innerHTML = keysContent[i][`eng`]
        keys.appendChild(key)
        key.classList.add('key')
        key.classList.add('win')
    }
    else if (i === 57) {
        let key = document.createElement('span')
        key.innerHTML = keysContent[i][`eng`]
        keys.appendChild(key)
        key.classList.add('key')
        key.classList.add('alt')
    }
    else if (i === 58) {
        let key = document.createElement('span')
        key.innerHTML = keysContent[i][`eng`]
        keys.appendChild(key)
        key.classList.add('key')
        key.classList.add('space')
    }
    else if (i === 59) {
        let key = document.createElement('span')
        key.innerHTML = keysContent[i][`eng`]
        keys.appendChild(key)
        key.classList.add('key')
        key.classList.add('alt')
    }
    else if (i === 60) {
        let key = document.createElement('span')
        key.innerHTML = keysContent[i][`eng`]
        keys.appendChild(key)
        key.classList.add('key')
        key.classList.add('arr-l')
    }
    else if (i === 61) {
        let key = document.createElement('span')
        key.innerHTML = keysContent[i][`eng`]
        keys.appendChild(key)
        key.classList.add('key')
        key.classList.add('arr-b')
    }
    else if (i === 62) {
        let key = document.createElement('span')
        key.innerHTML = keysContent[i][`eng`]
        keys.appendChild(key)
        key.classList.add('key')
        key.classList.add('arr-r')
    }
    else if (i === 63) {
        let key = document.createElement('span')
        key.innerHTML = keysContent[i][`eng`]
        keys.appendChild(key)
        key.classList.add('key')
        key.classList.add('ctrl')
    }
    else {
        let key = document.createElement('span')
        key.innerHTML = keysContent[i][`eng`]
        keys.appendChild(key)
        key.classList.add('key')

    }
}


const warning = document.createElement('p')
warning.innerHTML = 'К сожалению, я не успею доделать работу до конца дедлайна. Я сделал это задание на 20 баллов.'
container.appendChild(warning)
warning.classList.add('warning')


//Capitalize functional

addEventListener('keyup', (event) => {
    console.log(event.key)
})
