const input1 = document.querySelector('.canculator__firstwrapp--input1');
const input2 = document.querySelector('.canculator__secondwrapp--input2');
const input3 = document.querySelector('.canculator__secondwrapp--input3');
const plus = document.querySelector('.canculator__firstwrapp--btn1');
const minus = document.querySelector('.canculator__firstwrapp--btn3');
const divide = document.querySelector('.canculator__firstwrapp--btn4');
const multiplys = document.querySelector('.canculator__firstwrapp--btn2');
const resultMy = document.querySelector('.canculator__secondwrapp--btn');
const btns = document.querySelector('.canculator__firstwrapp--btns');

// function func(){
//     var num1 = Number(document.getElementById("input1").value);
//     var num2 = Number(document.getElementById("input2").value);
//     var result = num1 + num2;

//     document.getElementById("input3").innerHTML = result;
//     }

// function canculator() {
//     plus.addEventListener('click', () => {
//         input3.innerHTML = input1.value + input2.value
//     })
//     minus.addEventListener('click', () => {
//         input3.innerHTML = input1.value - input2.value
//     })
//     divide.addEventListener('click', () => {
//         input3.innerHTML = input1.value / input2.value
//     })
//     multiply.addEventListener('click', () => {
//         input3.innerHTML = input1.value * input2.value
//     })
// }
// result.addEventListener('click', () => {
//     canculator()
// })

// console.log(input1);
// console.log(input2);
// console.log(input3);
// console.log(plus);
// console.log(minus);
// console.log(divide);
// console.log(multiply);
// console.log(result);

function sum(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divicon(a, b) {
    return a / b
}

const OPERATIONS = {
  sum: plus,
  substract: minus,
  multiply: multiplys,
  divicon: divide,
};

function canculator({a, b, operation}) {
    let result = null;

    switch(operation) {
        case OPERATIONS.sum:
        result = sum(a, b);
        break;

        case OPERATIONS.substract:
        result = substract(a, b);
        break;

        case OPERATIONS.multiply:
        result = multiply(a, b);
        break;

        case OPERATIONS.divicon:
        result = divicon(a, b);
        break;

        default:
            break;
    }
    return result
}

btns.addEventListener('click', () => {
    canculator({a, b, operation})
})
resultMy.addEventListener('click', () => {
   input3.innerHTML = resultMy.innerHTML
})

// result.addEventListener('click', () => {
//     const a = +input1.value;
//     const b = Number(input2.value)
//     const operation = btns.value
//     const res = canculator({a, b, operation})

//     input3.innerHTML = result
// })

// const canculator = function(value) {
//     const canculatorValue = eval(value || null)
//     if(isNaN(canculatorValue)) {
//         input3.value = 'Неможливо поділити 0 на 0'
//         setTimeout(() => {
//             input3.value = '';
//         }, 1000);
//       } else {
//         input3.value = canculatorValue;
//       }
// }

// const liveScreen = function(entredValue) {
//     if(!input3.value) {
//         input3.value = ''
//     }
//     input3.value += entredValue
// }

// result.addEventListener('click', () => {
//     canculator(input3.value)
// })
