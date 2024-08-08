const text = document.getElementById('result');
const gameChoiceBtns = document.querySelectorAll('.game3__choice');
let choice;


const playGame = function (userChoice) {
  const choices = ['камінь', 'ножиці', 'папір'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  let result = '';

  if (
    (userChoice === 'камінь' && computerChoice === 'ножиці') ||
    (userChoice === 'ножиці' && computerChoice === 'папір') ||
    (userChoice === 'папір' && computerChoice === 'камінь')
  ) {
    result = `Ви виграли раунд!!`;
    text.style.color = '#039900';
  } else {
    result = `Комп’ютер виграв раунд!! `;
    text.style.color = '#990000';
  }

  text.textContent = result;
};

// const clickBtn = document.querySelector('.game3__btn');

// clickBtn.addEventListener('click', playGame);

gameChoiceBtns.forEach(btn =>{
  btn.addEventListener('click', () => {
    choice = btn.dataset.choice;
    console.log(choice);
    playGame(choice);
  });
})