const numInput = document.querySelectorAll('.num__wrapper--input');
const numWrapper = document.querySelector('.num__wrapper');
const numResult = document.querySelector('.num__subtitle');


// for (let i = 0; i < numInput.length; i++) {
//   numInput[i].addEventListener('input', () => {
//     let maxNum = Math.max(...numInput.map(Number));
//     numResult.textContent = `Найбільше число, яке ви ввели - (${maxNum})`;
//   });
// }

const arrayNum = [];
numInput.forEach(input => {
  input.addEventListener('input', () => {
    arrayNum.length = 0;
    numInput.forEach(input => {

      const num = +input.value
      if(!isNaN(num)) {
        arrayNum.push(num);
      }
    });
    if(arrayNum.length > 0) {
      const maxNumber = Math.max(...arrayNum);
      numResult.textContent = `Найбільше число, яке ви ввели - (${maxNumber})`;
    } else {
      numResult.textContent = "Введіть коректні числа";
    }
  }) 
});


// numWrapper.forEach(input => {
//     let maxNUmber = Math.max(input.map(Number))
//     numResult.textContent = `Найбільше число, яке ви ввели - (${maxNUmber}) `
// })

// const maxNum = Math.max(numInput.reduce((acc, number) => acc + number, 0))
// numResult.textContent = `The maximum number is: ${maxNum}`
