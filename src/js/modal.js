const modal = document.querySelector('[data-model]')
const modalOpen = document.querySelector('[data-open-modal]')
const modalClose = document.querySelector('[data-modal-close]')
const backdrop = document.querySelector('.backdrop-footer')
const input = document.querySelector('.footer__input')


const toogleModal = () => {
    backdrop.classList.toggle('is-hidden')
}

modalOpen.addEventListener('click', () => {
    let inputValue = input.value
    if (inputValue !== '' && inputValue.includes('@') && inputValue.includes('.')) {
        toogleModal()
    } else {
        alert('Пошта введена неправильно 🤨')
    }
})

modalClose.addEventListener('click', () => {
    toogleModal()
    input.value = ''
})
backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
        toogleModal();
        input.value = ''
    }
})

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        toogleModal()
        input.value = ''
    }
})
