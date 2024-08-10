const text = document.querySelector('.game3__result');
const computer =document.querySelector('.count-computer')
const user =document.querySelector('.count-user')

const gameChoiceBtns = document.querySelectorAll('.game3__choice');
let choice;
const score = {
  computer: 0,
  user: 0
}

gameChoiceBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    gameChoiceBtns.forEach(btn => (btn.style.boxShadow = '0 0 0 black'));
    choice = btn.dataset.choice;
    btn.style.boxShadow = '1px 1px 10px skyblue';

    console.log(choice);
  });
});

console.log(gameChoiceBtns);
console.log(Array.from(gameChoiceBtns));
const example = Array.from(gameChoiceBtns).find(btn => btn.dataset.choice === 'камінь');
console.log(example);

const playGame = function (userChoice) {

  const choices = ['камінь', 'ножиці', 'папір'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';
  switch (computerChoice) {
    case 'камінь':
      let findButton = Array.from(gameChoiceBtns).find(btn => btn.dataset.choice === 'камінь');
      ;
      console.log(findButton);
      findButton.style.boxShadow = '1px 1px 10px red';
      break;
    case 'ножиці':
      let findButton2 = Array.from(gameChoiceBtns).find(btn => btn.dataset.choice === 'ножиці');
      ;
      console.log(findButton2);
      findButton2.style.boxShadow = '1px 1px 10px red';
      break;
  }

  console.log('computer', computerChoice);
  console.log('user', userChoice);
  if (
    (userChoice === 'камінь' && computerChoice === 'ножиці') ||
    (userChoice === 'ножиці' && computerChoice === 'папір') ||
    (userChoice === 'папір' && computerChoice === 'камінь')
  ) {

    result = `Ви виграли раунд!!`;
    text.style.color = '#039900';
    score.user+= 1;
  }
  else if (
    (userChoice === 'камінь' && computerChoice === 'камінь') ||
    (userChoice === 'ножиці' && computerChoice === 'ножиці') ||
    (userChoice === 'папір' && computerChoice === 'папір')
  ) {
    result = 'Нічія!';
    text.style.color = 'skyblue';
  } else {
    result = `Комп’ютер виграв раунд!! `;
    text.style.color = '#990000';
    score.computer+= 1;
  }
  console.log(score.computer, score.user);
  text.textContent = result;
  computer.textContent = `Комп’ютер - ${score.computer}`
  user.textContent = `Ви - ${score.user}`

};

const clickBtn = document.querySelector('.game3__btn');

clickBtn.addEventListener('click', () => {
  playGame(choice)
});