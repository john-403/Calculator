const result = document.querySelector('div p');
const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('button.number');
const operators = document.querySelectorAll('button.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
let numbersClicked = [];
let operatorClicked = [];
let calculationResult = 0;
let operation = [];

var math_it_up = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y },
    '/': function (x, y) { return x / y }
};

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
            console.log('we will now subtract', a, 'and', b)
            return subtract(a, b);
            break;
        case '*':
            console.log('we will now multiply', a, 'and', b)
            return multiply(a, b);
            break;
        case '/':
            console.log('we will now divide', a, 'and', b)
            if (b === 0) {
                alert("HEY MF, YOU CANNOT DIVIDE BY 0!!");
                return NaN;
            }
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
        result.innerText += e.target.innerText;
        // const firstNumber = e.target.innerText;
        // const secondNumber = e.target.innerText;
        // console.log(firstNumber);
        // console.log(secondNumber);
        if (e.target.className === 'operator' || e.target.className === 'number') {
            if (e.target.className === 'operator') {
                operation.push(e.target.innerText);
            }
            else if (e.target.className === 'number') {
                operation.push(parseInt(e.target.innerText));
            }
        }
        if (e.target.className === 'operator') {
            operatorClicked.push(e.target.innerText);
        }
        else if (e.target.className === 'number') {
            numbersClicked.push(parseInt(e.target.innerText));
        }
        // result.innerText += 1;
        // result.innerText += ' ' + e.target.innerText;
        // console.log(e);
        console.log(numbersClicked);
        console.log(operatorClicked);
        console.log(`The operation is ${operation}.`);
        let numberCombined = 0;
        for (let i = 0; i < operation.length - 1; i++) {
            console.log('before if stat')
            if (typeof operation[i] === 'number' && typeof operation[i + 1] === 'number') {
                console.log('after if stat')
                numberCombined = parseInt('' + operation[i] + operation[i + 1]);
                console.log(`number combined is ${numberCombined} with i = ${i}`)
                operation.splice(i, 2, numberCombined);
            }
        }
        console.log(`Final operation is ${operation}`);
        if (e.target.id === 'equals') {
            result.innerText = '';
            //result.innerText += operate(operatorClicked, numbersClicked[0], numbersClicked[1]);
            // numbersClicked = numbersClicked.slice(0, 2);
            // console.log(math_it_up[operatorClicked](1, 2));
            // let calculationResult = 0;
            // const len = numbersClicked.length;
            // for (let i = 0; i < len; i++) {
            //     // calculationResult += numbersClicked[0] + operatorClicked[0] + numbersClicked[1];
            //     calculationResult += math_it_up[operatorClicked[0]](numbersClicked[0], numbersClicked[1]);

            //     // calculationResult += math_it_up[operatorClicked[0]](3, 4);
            //     console.log(`operatorClicked holds the values: ${operatorClicked}`);
            //     // calculationResult = math_it_up[operatorClicked[0]](3, 3);
            //     console.log('Hello');
            //     console.log(calculationResult);
            //     if (operatorClicked.length < 1) {
            //         operatorClicked = operatorClicked.slice(1);
            //     }

            //     numbersClicked = numbersClicked.slice(2);
            // }
            const len = operatorClicked.length;
            for (let i = 0; i < len; i++) {
                if (operation.includes("*")) {
                    calculationResult = operate('*', operation[operation.indexOf("*") - 1], operation[operation.indexOf("*") + 1]);
                    operation.splice(operation.indexOf("*") - 1, 3, calculationResult);
                    console.log(operation)
                }
                else if (operation.includes("/")) {
                    calculationResult = operate('/', operation[operation.indexOf("/") - 1], operation[operation.indexOf("/") + 1]);
                    operation.splice(operation.indexOf("/") - 1, 3, calculationResult);
                    console.log(operation)
                }
                else if (operation.includes("-")) {
                    calculationResult = operate('-', operation[operation.indexOf("-") - 1], operation[operation.indexOf("-") + 1]);
                    operation.splice(operation.indexOf("-") - 1, 3, calculationResult);
                    console.log(operation)
                }
                else if (operation.includes("+")) {
                    calculationResult = operate('+', operation[operation.indexOf("+") - 1], operation[operation.indexOf("+") + 1]);
                    operation.splice(operation.indexOf("+") - 1, 3, calculationResult);
                    console.log(operation)
                }
            }
            console.log(operation)
            if (!Number.isInteger(operation[0])) {
                operation[0] = Math.round(operation[0] * 1000) / 1000;
            }
            // calculationResult = operate(operatorClicked[0], numbersClicked[0], numbersClicked[1]);
            result.innerText += ' ' + `${operation}`;


        }
        if (e.target.id === 'clear') {
            /* result.innerText = 'Result:'; */
            result.innerText = '';
            /* result.innerText = 'test'; */
            numbersClicked = [];
            operatorClicked = [];
            operation = [];
        }
    })
}

