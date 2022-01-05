const modal = document.querySelector('.modal')
const contactBtn = document.querySelector('.contact-btn')
const closeBtn = document.querySelector('.close-btn')
const card = document.querySelector('.modal__card')


function openModal() {
    modal.classList.add('open')
}

function closeModal() {
    modal.classList.remove('open')
}

contactBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
modal.addEventListener('click', closeModal)
card.addEventListener('click', function (event) {
    event.stopPropagation()
})

const downloadResume = document.querySelector('.modal__download')
function alertMessage() {
    alert('My CV will be update soon :)')
}

downloadResume.addEventListener('click', alertMessage)