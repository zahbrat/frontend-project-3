const modalCloseHeaderHeader = document.querySelector('.modal-header__close')
const backdropHeader = document.querySelector('.backdrop-header')
const headerGreet = document.querySelector('.header__greeting')
const modalInput = document.querySelector('.modal-header__input')
const saveBtn = document.querySelector('.modal-header__btn')

console.log('close',modalCloseHeader);
saveBtn.addEventListener('click', () => {
    if(modalInput.value !== '') {
        headerGreet.textContent = `Вітаємо, ${modalInput.value}!`
        toggleModal2()
    } else {
        alert('Введіть ваше ім\'я')
    }
})

const toggleModal2 = () => {
    backdropHeader.classList.toggle('is-hidden')
}


modalCloseHeader.addEventListener('click', () => {
    console.log('click');
    toggleModal2()
})


backdropHeader.addEventListener('click', (e) => {
    if (e.target === backdropHeader) {
        toggleModal2();
    }
});
