const btnOpenInterakt = document.querySelector('.header__interakt');
const headerSubmenu = document.querySelector('.header__submenu');
console.log(btnOpenInterakt);
console.log(headerSubmenu);
btnOpenInterakt.addEventListener('click', () => {
    console.log('click');
    
  headerSubmenu.classList.toggle('idk');
});

// let root = document.querySelector(":root");
// let span = document.querySelector("slider round");
// const switchtheme = document.getElementById("theme-switch")

// switchtheme.addEventListener('click', () => {
//   document.body.classList.toggle('dark');
//   console.log('changetheme');
// })