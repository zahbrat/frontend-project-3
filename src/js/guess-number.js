const text = document.getElementById('result');

const guessNumber = function () {
  const numberToGuess = Math.floor(Math.random() * 10) + 1;
  const userGuess = parseInt(document.getElementById('guess').value);
  let result = '';
  if (userGuess > 10 || userGuess <= 0) {
    result = 'Будь ласка, введіть число в діапазоні від 1 до 10.';
    text.style.color = 'black';
  }
  // return;
  else if (userGuess === numberToGuess) {
    result = `Вітаю, ви вгадали число ${numberToGuess}!`;
    text.style.color = '#039900';
  } else {
    result = `Ви програли, комп'ютер загадав число ${numberToGuess}.`;
    text.style.color = '#990000';
  }

  text.textContent = result;
};

const checkBtn = document.querySelector('.guess-number__btn');

checkBtn.addEventListener('click', guessNumber);
