const modal = document.querySelector('[data-model]')
const modalOpen = document.querySelector('[data-open-modal]')
const modalClose = document.querySelector('[data-modal-close]')
const backdrop = document.querySelector('.backdrop')

console.log(modal);
console.log(modalOpen);
console.log(modalClose);
console.log(backdrop);

const toogleModal = () => {
    modal.classList.toggle('is-hidden')
    modal.classList.toggle('no-scroll')
}
modalClose.addEventListener('click', toogleModal)
modalOpen.addEventListener('click', toogleModal)
backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
        toogleModal();
      }
})