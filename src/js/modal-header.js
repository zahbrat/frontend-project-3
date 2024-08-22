const modalClose = document.querySelector('.modal-header__close')
const backdropHeader = document.querySelector('.backdrop-header')
const inputHeader = document.querySelector('.modal-header__input')
const saveBtn = document.querySelector('.modal-header__btn')
const greetText = document.querySelector('.header__greetinging')
console.log(modalClose);
console.log(backdropHeader);


const toggleModal = () => {
    backdropHeader.classList.toggle('is-hidden')

}


modalClose.addEventListener('click', () => {
    console.log('click');
    toggleModal()
})


backdropHeader.addEventListener('click', (e) => {
    if (e.target === backdropHeader) {
        toggleModal();
    }
});

saveBtn.addEventListener('click', () => {
greetText.textContent = `Вітаємо, ${inputHeader.value}`
toggleModal()
})
