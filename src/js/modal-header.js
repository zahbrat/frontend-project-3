const modalClose = document.querySelector('[data-modal-close]')
const backdrop = document.querySelector('.backdrop')

console.log(modalClose);
console.log(backdrop);


const toggleModal = () => {
    backdrop.classList.toggle('is-hidden')
  
}


modalClose.addEventListener('click', () =>{
    console.log('click');
    toggleModal()
})


backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
        toggleModal();
    }
});

