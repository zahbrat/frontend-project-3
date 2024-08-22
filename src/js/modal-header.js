const modalClose = document.querySelector('.modal-header__close')
const backdropHeader = document.querySelector('.backdrop-header')
const headerGreet = document.querySelector('.header__greeting')
const modalInput = document.querySelector('.modal-header__input')
const saveBtn = document.querySelector('.modal-header__btn')

console.log(modalClose);
console.log(backdropHeader);

saveBtn.addEventListener('click', () => {
    if(modalInput.value !== '') {
        headerGreet.textContent = `Вітаємо, ${modalInput.value}!`
        toggleModal()
    } else {
        alert('Введіть ваше ім\'я')
    }
})

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
