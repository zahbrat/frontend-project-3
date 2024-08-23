const text = document.getElementById('resultYear');
const checkYear = function () {
  const year = document.getElementById('year').value;

  // Перевірка, чи введене значення є числом
  if (isNaN(year) || year.trim() === '' || year <= 0) {
    text.textContent = 'Будь ласка, введіть правильний рік!';
    text.style.color = '#8ACECF';
    return;
  } 

  console.log(year);
  let result = '';
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    result = 'Ви народилися у високосний рік!';
    text.style.color = '#039900';
  } else {
    result = 'Ви народилися не у високосний рік!';
    text.style.color = 'red';
  }
  text.textContent = result;
};

const checkBtn = document.querySelector('.check-year__btn');

checkBtn.addEventListener('click', checkYear);
