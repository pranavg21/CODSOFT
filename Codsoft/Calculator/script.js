let currentInput = '';
let operator = '';
let firstOperand = '';

function updateDisplay() {
    document.getElementById('display').innerText = currentInput === '' ? '0' : currentInput;
}

function appendCharacter(char) {
    currentInput += char;
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    firstOperand = currentInput;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function calculate() {
    if (operator && firstOperand && currentInput) {
        let result;
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }

        currentInput = result.toString();
        operator = '';
        firstOperand = '';
        updateDisplay();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateDisplay();
});
