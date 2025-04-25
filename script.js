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
function percent(a, b) {
  if (a && b !== "") {
    return (b / 100) * a;
  } else if (a) {
    return (1 / 100) * a;
    console.log((1 / 100) * a);
  }
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
  } else if (operator === "%") {
    return percent(firstNumber, secondNumber);
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
      appendNumber(output);
      console.log(firstNumber);
    } else {
      secondNumber += output;
      appendNumber(output);
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

const reset = document.querySelector(".ac");

reset.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  isOperatorPressed = false;
  screenPara.textContent = "";
});

function appendNumber(num) {
  if (screenPara.textContent.length < 13) {
    screenPara.textContent += num;
  }
}

const digitPressed = document.querySelectorAll(".dark-grey");

digitPressed.forEach((digit) => {
  digit.addEventListener("click", () => {
    digit.classList.add("digit-blink");
    setTimeout(() => {
      digit.classList.remove("digit-blink");
    }, 100);
  });
});

const orangeBc = document.querySelectorAll(".orange");

orangeBc.forEach((orange) => {
  orange.addEventListener("click", () => {
    orange.classList.add("orange-blink");
    setTimeout(() => {
      orange.classList.remove("orange-blink");
    }, 100);
  });
});

const greyBc = document.querySelectorAll(".grey");

greyBc.forEach((grey) => {
  grey.addEventListener("click", () => {
    grey.classList.add("grey-blink");
    setTimeout(() => {
      grey.classList.remove("grey-blink");
    }, 100);
  });
});
