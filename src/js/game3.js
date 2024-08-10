const text = document.querySelector('.game3__result');
const gameChoiceBtns = document.querySelectorAll('.game3__choice');
let choice;

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
  console.log(computerChoice);
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
  if (
    (userChoice === 'камінь' && computerChoice === 'ножиці') ||
    (userChoice === 'ножиці' && computerChoice === 'папір') ||
    (userChoice === 'папір' && computerChoice === 'камінь')
  ) {
    result = `Ви виграли раунд!!`;
    text.style.color = '#039900';
  } else if (
    (userChoice === 'камінь' && computerChoice === 'ножиці') ||
    (userChoice === 'ножиці' && computerChoice === 'папір') ||
    (userChoice === 'папір' && computerChoice === 'камінь')
  ) {
    result = 'Нічія!';
    text.style.color = 'skyblue';
  } else {
    result = `Комп’ютер виграв раунд!! `;
    text.style.color = '#990000';
  }

  text.textContent = result;
};

const clickBtn = document.querySelector('.game3__btn');

clickBtn.addEventListener('click', playGame);