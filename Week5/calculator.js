let num1 = document.querySelector("#number1");
let num2 = document.querySelector("#number2");
let result = document.querySelector("#result");

function add() {
    result.value = Number(num1.value) + Number(num2.value);
}

function subtract() {
    result.value = Number(num1.value) - Number(num2.value);
}

function multiply() {
    result.value = Number(num1.value) * Number(num2.value);
}

function divide() {
    // Check the value of number 2
    if (num2.value == 0) {
        alert("Error! Divided by 0");
        return;
    }
    else {
        document.querySelector("#result").value = Number(num1.value) / Number(num2.value);
    }
}