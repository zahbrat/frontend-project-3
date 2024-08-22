const btnOpenInterakt = document.querySelector('.header__interakt');
const headerSubmenu = document.querySelector('.header__submenu');
console.log(btnOpenInterakt);
console.log(headerSubmenu);
btnOpenInterakt.addEventListener('click', () => {
    console.log('click');
    
  headerSubmenu.classList.toggle('idk');
});

let root = document.querySelector(":root");
let span = document.querySelector("slider round");

span.addEventListener('click', () => {
  event.preventDefault();
  root.classList.toggle('dark');
})