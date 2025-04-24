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

let firstNumber = "";
let secondNumber = "";
let operator = "";
let isOperatorPressed = false;

function operate(operator, firstNumber, secondNumber) {
  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    return divide(firstNumber, secondNumber);
  }
}

const screenPara = document.querySelector(".screen p");

const displayable = document.querySelectorAll(".displayable");

const equals = document.querySelector(".equals");

const backspace = document.querySelector(".back-space");

function computeResult() {
  if (firstNumber && operator && secondNumber) {
    const result = operate(operator, Number(firstNumber), Number(secondNumber));
    screenPara.textContent = result;

    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
    isOperatorPressed = false;
  }
}

function display(e) {
  let output = e.target.innerText;
  console.log(output);
  //   screenPara.textContent = "";
  if (e.target.classList.contains("operator")) {
    if (firstNumber !== "") {
      if (isOperatorPressed) return;

      if (output === "x") {
        operator = "*";
      } else if (output === "÷") {
        operator = "/";
      } else {
        operator = output;
      }
      isOperatorPressed = true;
      screenPara.textContent += ` ${operator} `;
      console.log(operator);
    }
  } else {
    if (!isOperatorPressed) {
      firstNumber += output;
      screenPara.textContent += output;
      console.log(firstNumber);
    } else {
      secondNumber += output;
      screenPara.textContent += output;
    }
  }
}

backspace.addEventListener("click", () => {
  let screenText = screenPara.textContent.trim();
  if (screenText.length === 0) return;

  if (isOperatorPressed && secondNumber !== "") {
    secondNumber = secondNumber.slice(0, -1);
    screenPara.textContent = screenText.slice(0, -1);
  } else if (isOperatorPressed && secondNumber == "") {
    operator = "";
    isOperatorPressed = false;
    screenPara.textContent = screenText.slice(0, -3);
  } else if (firstNumber !== "") {
    firstNumber = firstNumber.slice(0, -1);
    screenPara.textContent = screenText.slice(0, -1);
  }
});

displayable.forEach((button) => {
  button.addEventListener("click", display);
});

equals.addEventListener("click", computeResult);
