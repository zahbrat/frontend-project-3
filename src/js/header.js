const btnSubmenu = document.querySelector('.header__interakt')
const submenuHeader = document.querySelector('.header__submenu')


btnSubmenu.addEventListener('click', () => {
    submenuHeader.classList.toggle('isShow')
})

// let root = document.querySelector(":root");
// let span = document.querySelector("slider round");
const switchtheme = document.getElementById("theme-switch")

switchtheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  console.log('changetheme');
})