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

function calculateExpersion() {
    if ((isOperator(operation[index]) || operation.length == 0)) {
        return;
    }

    let i = 0;

    while (operation.length > 1) {
        for (let j = 0; j < operation.length; j++) {
            if (operation[j] == '*' || operation[j] == '÷') {
                i = j - 1;
                break;
            }
        }
        
        let answer = operate(+operation[i], operation[i+1], +operation[i+2]);
        
        operation.splice(i, 3, answer);
        i = 0;
    }

    lowerDisplay.textContent = operation[0];
    index = 0;
}

let operation = [];
let index = 0;


const upperDisplay = document.querySelector('.upperPart');
const lowerDisplay = document.querySelector('.lowerPart');
const buttons = document.querySelectorAll('.cell');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonContent = button.textContent;

        if (isOperator(buttonContent)) {    //check if the button pressed was an operator
            if (!(operation.length == 0 || isOperator(operation[index - 1]))) {    //to make sure that the last entry was not an operator or there was no thing at all
                operation[++index] = buttonContent;
                index++;
                upperDisplay.textContent += ' ' + buttonContent + ' '; 
            }
        } else if (buttonContent == 'Clear') {  //check if the clear button was pressed

            operation = [];                 //empty the operation array
            upperDisplay.textContent = '';  //make the upperDisplay empty
            lowerDisplay.textContent = '';  //make the lowerDisplay empty

        } else if (buttonContent == '=') {  //check if the equal button was pressed

            if (!(index == operation.length))
                calculateExpersion();
        
        } else {    //a number was pressed

            if (operation[index] === undefined)     
                operation[index] = buttonContent;
            else
                operation[index] += buttonContent;
            
            upperDisplay.textContent += buttonContent;
        }
    })
})
