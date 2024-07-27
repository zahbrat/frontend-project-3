const modal = document.querySelector('[data-model]')
const modalOpen = document.querySelector('[data-open-modal]')
const modalClose = document.querySelector('[data-modal-close]')
const backdrop = document.querySelector('.backdrop')
const input = document.querySelector('.footer__input')

console.log(modal);
console.log(modalOpen);
console.log(modalClose);
console.log(backdrop);
console.log(input);

const toogleModal = () => {
    modal.classList.toggle('is-hidden')
    modal.classList.toggle('no-scroll')
}

 modalOpen.addEventListener('click', () => {
    let inputValue = input.value
    if(inputValue !== '' && inputValue.includes('@') && inputValue.includes('.')) {
        toogleModal()
    } else {
        alert('Пошта введена неправильно 🤨')
    }
 })

modalClose.addEventListener('click', toogleModal)
backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
        toogleModal();
      }
})

document.addEventListener('keydown', (e) => {
    if(e.code === 'Escape') {
        toogleModal()
    }
})
