const calculator = document.querySelector('.calculator');
const screen = document.querySelector('.screen')
let operation = '';
screen.textContent = '0';


const updateScreen = function (contenido) {
    screen.textContent = contenido;
}

const cleanCalculator = function () {
    updateScreen('0');
    operation = '';
}

const deleteDigit = function () {
    operation = operation.substring(0, operation.length - 1);
    updateScreen(operation);
    if (operation.length == 0) {
        updateScreen('0');
    }
}

const doOperation = function () {
    try {
        let lastDigit = operation.charAt(operation.length - 1);
        if (lastDigit != '/' && lastDigit != '+' && lastDigit != '-' && lastDigit != '*') {
            operation = eval(operation);
            updateScreen(operation);
            operation = operation.toString();
        }
    } catch (error) {
        updateScreen('ERROR')
    }
}

calculator.addEventListener('click', (e) => {
    if (e.target.value == 'C') {
        cleanCalculator();
    } if (e.target.value == '<-') {
        deleteDigit();
    } if (e.target.value == '=') {
        doOperation();
    } if (e.target.classList.contains('operation')) {
        operation = operation.concat(e.target.value);
        updateScreen(operation);
    }

})