const result = document.querySelector('div p');
const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('button.number');
const operators = document.querySelectorAll('button.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
let numbersClicked = [];
let operatorClicked = '';

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            console.log('we will now add', a, 'and', b)
            // console.log(add(a, b));
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
        default:
            alert("Please pick one of the basic operators.");
    }
}

for (let button of buttons) {
    // button.addEventListener('click', function (e) {
    //     const firstNumber = e.target.innerText;
    //     console.log(firstNumber);
    // });

    // button.addEventListener('click', function (e) {
    //     const secondtNumber = e.target.innerText;
    //     console.log(secondtNumber);
    // });


    button.addEventListener('click', function (e) {
        // const firstNumber = e.target.innerText;
        // const secondNumber = e.target.innerText;
        // console.log(firstNumber);
        // console.log(secondNumber);
        if (e.target.className === 'operator') {
            operatorClicked = e.target.innerText;
        }
        else if (e.target.className === 'number') {
            numbersClicked.push(parseInt(e.target.innerText));
        }
        // result.innerText += 1;
        // result.innerText += ' ' + e.target.innerText;
        // console.log(e);
        console.log(numbersClicked);
        console.log(operatorClicked);
        if (e.target.id === 'equals') {
            //result.innerText += operate(operatorClicked, numbersClicked[0], numbersClicked[1]);
            result.innerText += ' ' + `${operate(operatorClicked, numbersClicked[0], numbersClicked[1])}`;
        }
        if (e.target.id === 'clear') {
            result.innerText = 'Result:';
            numbersClicked = [];
        }
    })
}

// const firstNumber = numbersClicked[0];
// const secondNumber = numbersClicked[1];

// console.log(firstNumber)
// console.log(secondNumber)