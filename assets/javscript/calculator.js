let addition = (a,b) => a + b;
let subtraction = (a,b) => a - b;
let multiplication = (a,b) => a * b;
let division = (a,b) => a / b;

let value1 = 0;
let value2 = 0;
let total = 0;
let op = "";
let prevOp = "";
let power = true;

let displayArea = document.querySelector('#displayArea');
displayArea.textContent = isDecimal(value1);

/* Clears the display*/
let clearButtons = document.querySelectorAll('#clear');
clearButtons.forEach((button) => {
    button.addEventListener("click", () => {
        value2 = 0;
        value1 = 0;
        prevOp = "";
        displayArea.textContent = isDecimal(value1);
    });
})

let numKeys = document.querySelectorAll('#num');
numKeys.forEach((key) => {
    key.addEventListener("click", () => {
        if (!power) {
            power = true;
        }
        value2 = Number(`${value2}${key.textContent}`);
        displayArea.textContent = Number(value2);
    });
})

let opKeys = document.querySelectorAll('#operation');
opKeys.forEach((key) => {
    key.addEventListener("click", () => {
        if (prevOp.length === 0) {
            prevOp = key.textContent;
            value1 = value2;
            displayArea.textContent = isDecimal(value1);
            value2 = 0;
        } else {
            operate(value1, value2, prevOp);
            prevOp = key.textContent;
            value2 = 0;
            displayArea.textContent = isDecimal(value1);
        }
    });
})

let decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener("click", () => {
    tempValue2 = value2.toString();
    if (!tempValue2.includes('.')) {
    tempValue2 += '.';
    value2 = tempValue2;
    displayArea.textContent = value2;
    };
})

function operate(num1, num2, prevOp) {
    if (prevOp === '+') {
        value1 = addition(num1,num2);
        value2 = 0;
    } else if (prevOp === '-') {
        value1 = subtraction(num1,num2);
        value2 = 0;
    } else if (prevOp === '/') {
        value1 = division(num1,num2);
        value2 = 0;
    } else if (prevOp === 'x') {
        value1 = multiplication(num1,num2);
        value2 = 0;
    } else {
        displayArea.textContent = isDecimal(value1);
    };
}

function digitsAfterDecimal(value) {
    let afterDecimal = value.toString().split('.')[1] || '';
    return afterDecimal.length;
}

function isDecimal(numToCheck) {
    let decimals = digitsAfterDecimal(numToCheck);
    if (decimals > 6) {
        return Number(numToCheck.toFixed(6));
    } else {
        return Number(numToCheck);
    }
}

let deleteButton = document.querySelector('#del');
deleteButton.addEventListener("click", () => {
    let tempValue = value2.toString().slice(0,-1);
    value2 = Number(tempValue);
    displayArea.textContent = value2;
})

let onOffButtons = document.querySelectorAll('#onOff');
onOffButtons.forEach((onOff) => {
    onOff.addEventListener("click", () => {
        power = !power;
        turnOnOff(power);
    })
})

function turnOnOff(power) {
if (!power) {
    let tempDisplay = value2.toString();
    tempDisplay = "";
    displayArea.textContent = tempDisplay;
    value1 = 0;
    value2 = 0;
    prevOp = "";
} else {
    displayArea.textContent = value2;
};
}

let allKeys = document.querySelectorAll('.key');
allKeys.forEach((keyPress) => {
    keyPress.addEventListener("click", () => {
        keyPress.classList.add('keyPressed');  
        setTimeout(function() {
            keyPress.classList.remove('keyPressed');
        }, 100);
              
    })
})


