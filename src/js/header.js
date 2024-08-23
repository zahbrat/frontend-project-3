const btnSubmenu = document.querySelector('.header__interakt')
const submenuHeader = document.querySelector('.header__submenu')


btnSubmenu.addEventListener('click', () => {
    submenuHeader.classList.toggle('isShow')
})



const games = [
    {
      id: 1,
      name: 'Високосний калькулятор',
      category: 'numerical',
  
    },
    {
      id: 2,
      name: 'Вгадай число',
      category: 'numerical',
  
    },
    {
      id: 3,
      name: 'Камінь-Ножиці-Папір',
      category: 'game',
  
    },
    {
      id: 4,
      name: 'Калькулятор',
      category: 'numerical',
  
    },
    {
      id: 5,
      name: 'Калькулятор часу',
      category: 'numerical',
  
    },
    {
      id: 6,
      name: 'Google динозаврик',
      category: 'game',
  
    },
    {
      id: 7,
      name: 'Футбол',
      category: 'game',
  
    },
    {
      id: 8,
      name: 'Найбільше число',
      category: 'numerical',
  
    },
    {
      id: 9,
      name: 'Наша команда',
      category: 'acquaintance',
  
    },
    {
      id: 10,
      name: 'Вчений',
      category: 'acquaintance',
  
    },
  ]
  const allSect = document.getElementById('all')
  const numSect = document.getElementById('number')
  const gameSect = document.getElementById('game')
  const greetingSect = document.getElementById('greeting')
  
  const numerical = document.querySelectorAll('.numerical')
  const game = document.querySelectorAll('.game')
  const acquaintance = document.querySelectorAll('.acquaintance')
  
  numSect.addEventListener('click', () => {

    numerical.forEach(num => num.style.display = 'block')
    game.forEach(game => game.style.display = 'none')
    acquaintance.forEach(acquaintance => acquaintance.style.display = 'none')
  
  })
  gameSect.addEventListener('click', () => {
  
    numerical.forEach(num => num.style.display = 'none')
    game.forEach(game => game.style.display = 'block')
    acquaintance.forEach(acquaintance => acquaintance.style.display = 'none')
  
  })
  greetingSect.addEventListener('click', () => {
  
    numerical.forEach(num => num.style.display = 'none')
    game.forEach(game => game.style.display = 'none')
    acquaintance.forEach(acquaintance => acquaintance.style.display = 'block')
  
  })
  
  allSect.addEventListener('click', () => {
    numerical.forEach(num => num.style.display = 'block')
    game.forEach(game => game.style.display = 'block')
    acquaintance.forEach(acquaintance => acquaintance.style.display = 'block')
  })


  