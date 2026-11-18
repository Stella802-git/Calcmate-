const display = document.getElementById("display")
const numberButtons = document.querySelectorAll(".number")
numberButtons.forEach(function(button){
  button.addEventListener("click", function() {
   if(waitingForSecondNumber === true) {
     display.textContent = button.textContent
     waitingForSecondNumber = false
   }else if(button.textContent === "." && display.     textContent.includes(".")) {
   }else if (display.textContent === "0") {
      display.textContent = button.textContent
    }else{
      display.textContent += button.textContent
    }
  });
}) ;

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function() {
  display.textContent = "0";
})

let firstNumber= null
let selectedOperator= null
let waitingForSecondNumber = false;


const operatorButtons = document.querySelectorAll(".operator")
operatorButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    selectedOperator = button.textContent
    firstNumber = display.textContent
    display.textContent = firstNumber + " " + selectedOperator;
    waitingForSecondNumber = true;
  })
})

const equalButton = document.querySelector(".equals");
equalButton.addEventListener("click", function() {
  let secondNumber = display.textContent

  let num1= Number(firstNumber)
  let num2= Number(secondNumber)
  
  let result;
  
  switch(selectedOperator) {
    case "+" : 
      result= num1 + num2;
     break; 

        case "-" : 
      result= num1 - num2;
     break; 

          case "×" : 
      result= num1 * num2;
     break; 

           case "÷":
  if (num2 === 0) {
    result = "Cannot divide by zero";
  } else {
    result = num1 / num2;
  }
  break;
  }
  display.textContent = result
})
