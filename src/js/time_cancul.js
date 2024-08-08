const inputTime = document.querySelector('.time__wrapper--input')
const btnTime = document.querySelector('.time__wrapper--btn')
const resultTime = document.querySelector('.time__days--info')
console.log(inputTime, btnTime, resultTime);


const getTimeFromMinutes = function () {
console.log('click');

let minutes = +inputTime.value
  if (
    typeof minutes !== 'number' ||
    !Number.isInteger(minutes) ||
    minutes < 0
  ) {
    return 'Помилка, перевірте дані';
  }


  let days = Math.floor(minutes / 1440)
  minutes %= 1440
  let hour = Math.floor(minutes / 60);
  minutes %= 60;
  let remainingMinutes = minutes % 60;
  
  resultTime.textContent = `${days} дн ${hour}:${remainingMinutes}`
}

btnTime.addEventListener('click', getTimeFromMinutes)
