const btnOpenInterakt = document.querySelector('.header__interakt');
const headerSubmenu = document.querySelector('.header__submenu-items');
console.log(btnOpenInterakt);
console.log(headerSubmenu);
btnOpenInterakt.addEventListener('click', () => {
    console.log('click');
    
  headerSubmenu.classList.toggle('idk');
});
