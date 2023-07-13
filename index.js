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

function operate(num1, operator, num2) {

    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    }
}

function isOperator(operator) {
    if (operator == '+') {
        return true;
    } else if (operator == '-') {
        return true;
    } else if (operator == '*') {
        return true;
    } else if (operator == '÷') {
        return true;
    } else {
        return false;
    }
}

let operation = [];
let index = 0;


const upperDisplay = document.querySelector('.upperPart');
const lowerDisplay = document.querySelector('.lowerPart');
const buttons = document.querySelectorAll('.cell');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonContent = button.textContent;
        if (isOperator(buttonContent)) {
            if (!(isOperator(operation[index]) || operation.length == 0)) {    //to make sure that the last entry was not an operator or there was no thing at all
                operation[++index] = ' ' + buttonContent + ' ';
                index++;
                upperDisplay.textContent += ' ' + buttonContent + ' '; 
            }
        } else {
            if (operation.length == 0)
                operation[index] = buttonContent;
            else
                operation[index] += buttonContent;
            
            upperDisplay.textContent += buttonContent;
        }
    })
})
