let displayValue = '0';
let operator = '';
let operand = '';
let operationHistory = '';

function updateDisplay() {
  document.getElementById('display').textContent = operationHistory || displayValue;
}

function clearDisplay() {
  displayValue = '0';
  operator = '';
  operand = '';
  operationHistory = '';
  updateDisplay();
}

function appendNumber(number) {
  if (displayValue === '0' || operator) {
    displayValue = number;
  } else {
    displayValue += number;
  }
  operationHistory += number;
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    operationHistory += '.';
    updateDisplay();
  }
}

function setOperator(op) {
  if (!operator) {
    operand = displayValue;
    operator = op;
    operationHistory = `${operand} ${operator}`;
    displayValue = '0';
    updateDisplay();
  }
}

function calculateResult() {
  if (operator && operand) {
    const currentOperand = displayValue || '0';
    switch (operator) {
      case '+':
        displayValue = (parseFloat(operand) + parseFloat(currentOperand)).toString();
        break;
      case '-':
        displayValue = (parseFloat(operand) - parseFloat(currentOperand)).toString();
        break;
      case '*':
        displayValue = (parseFloat(operand) * parseFloat(currentOperand)).toString();
        break;
      case '/':
        displayValue = (parseFloat(operand) / parseFloat(currentOperand)).toString();
        break;
      default:
        break;
    }
    operationHistory = `${operand} ${operator} ${currentOperand} = ${displayValue}`;
    operator = '';
    operand = '';
    updateDisplay();
  }
}

updateDisplay();
