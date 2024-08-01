const input1 = document.querySelector('.canculator__firstwrapp--input1');
const input2 = document.querySelector('.canculator__secondwrapp--input2');
const resultMy = document.querySelector('.canculator__secondwrapp--input3');
const btns = document.querySelectorAll('.canculator__firstwrapp--btn');
const equalBtn = document.querySelector('.canculator__secondwrapp--btn')

let btnOperation = 0
let firstValue = 0
let secondValue = 0
let result = null


const canculatorNum = () => {

    if(input1.value === '' && input2.value === '') {
        alert('Заповніть поля введення чисел')
        return;
    }

    firstValue = Number(input1.value);
    secondValue = Number(input2.value);
    
    switch (btnOperation) {
        case '+':
            result = firstValue + secondValue;
            break;
        case '-':
            result = firstValue - secondValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        case '/':
            result = firstValue / secondValue;
            break;

            default: alert('Виберіть операцію')
            return;
    }

    resultMy.textContent = result;
}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btnOperation = btn.dataset.value; // getAtributes
        console.log(btnOperation);
    })
})

equalBtn.addEventListener('click', canculatorNum);

