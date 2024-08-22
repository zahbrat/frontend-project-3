const btnSubmenu = document.querySelector('.header__interakt')
const submenuHeader = document.querySelector('.header__submenu')


btnSubmenu.addEventListener('click', () => {
    submenuHeader.classList.toggle('isShow')
})