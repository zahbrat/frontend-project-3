const numInput = document.querySelector('.num__wrapper--input');
const numWrapper = document.querySelector('.num__wrapper');
const numResult = document.querySelector('.num__subtitle');

// numWrapper.forEach(input => {
//     input.addEventListener('click', () => {
//         numWrapper.forEach(input => input.classList.remove('isActive'))
//         input.classList.toggle('isActive');
//     })
// })

// for (let i = 0; i < numInput.length; i++) {
//   numInput[i].addEventListener('input', () => {
//     let maxNum = Math.max(...numInput.map(Number));
//     numResult.textContent = `Найбільше число, яке ви ввели - (${maxNum})`;
//   });
// }

numWrapper.forEach(input => {
  maxNumber = Math.max(input.value);
//   return maxNumber;
  numResult.textContent = `Найбільше число, яке ви ввели - (${maxNumber})`;
});
// console.log(maxNumber);

// numWrapper.forEach(input => {
//     let maxNUmber = Math.max(input.map(Number))
//     numResult.textContent = `Найбільше число, яке ви ввели - (${maxNUmber}) `
// })

// const maxNum = Math.max(numInput.reduce((acc, number) => acc + number, 0))
// numResult.textContent = `The maximum number is: ${maxNum}`
