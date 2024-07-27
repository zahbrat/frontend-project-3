const modalClose = document.querySelector('.modal-header__close')
const backdropHeader = document.querySelector('.backdrop-header')

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

