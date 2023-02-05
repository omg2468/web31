const text = document.querySelector('.text')
const allButton = document.querySelectorAll('.button')

console.log(allButton)

let buttonNumber = (e) => {
    text.innerHTML += e.target.innerHTML
}

allButton.forEach(button => {
    if(button.className == 'button number') {
        button.addEventListener('click', buttonNumber)
    }
})