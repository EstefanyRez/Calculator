import { add ,divide, multiply, subtract } from "./operations.js";

// THIS IS ALSO PART OF MY ATTEMPT
export { add, subtract, multiply, divide } from "./operations.js"
const display = document.querySelector('.calculator-display');
const keys = document.querySelectorAll('button');
// to detect when I am writting the secondNumber
let operationStatus = false;
let firstNumber;
let typeOperation;

const calculator = () =>{
    keys.forEach(key =>{
        key.addEventListener('click', e => {
            // It is a number
            if (e.target.dataset.number) displayNumber(e.target.dataset.number);
            // It is an operator
            if (e.target.dataset.operator) getOperation(e.target.dataset.operator);
            // It is an action
            if (e.target.dataset.action) runAction(e.target.dataset.action);
        });
    });
}

// display the numbers that have been pressed on, replace the default 0 and then concatenate one after another
function displayNumber(number) {
    display.textContent === '0' || operationStatus === true 
    ? display.textContent = number 
    : number === '.' && !display.textContent.includes('.') 
        ? display.textContent += number 
        : number !== '.' 
            ? display.textContent += number 
            : null
    operationStatus = false;
}

// save the first number, save the type of operator (minus, plus, times, by), display the operator
function getOperation(operator) {
    operationStatus = true;
    firstNumber = parseFloat(display.textContent);
    typeOperation = operator;
    display.textContent = operator;
}

function runAction(action) {
    if (action === 'clear') {
        display.textContent = display.textContent.slice(0, -1);
        if (display.textContent === '') display.textContent = '0'
    } else if (action === 'clear-all') {
        display.textContent = '0';
        // function to get the result
    } else if (action === 'equals') {
        const secondNumber = parseFloat(display.textContent)
        getResult(firstNumber, secondNumber, typeOperation)
        operationStatus = true
    }
    function getResult(a, b, operation) {
        // THIS IS MY ATTEMPT OF MAKING IT DIFFERENT
        if (operation === '+') display.textContent = add(a, b)
        if (operation === '-') display.textContent = subtract(a, b)
        if (operation === 'x') display.textContent = multiply(a, b)
        if (operation === '/') display.textContent = divide(a, b)
    }
}

export { calculator }