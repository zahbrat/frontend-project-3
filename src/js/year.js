// Check-year
const text = document.getElementById('result')
const checkYear = function () {
  const year = document.getElementById('year').value;
  console.log(year);
  let result = '';
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    result = 'Ви народилися у високосний рік!';
  } else {
    result = 'Ви народилися  не у високосний рік!';
    text.style.color = 'red'
  }
  text.textContent = result;
};

const checkBtn = document.querySelector(`.check-year__btn`);

checkBtn.addEventListener('click', checkYear);
