const result = document.getElementById("result");
const billAmount = document.getElementById("amount");
const persons = document.getElementById("person");
const submitBtn = document.getElementById("submit-btn");
const errorMessage = document.querySelectorAll(".error");
const resetBtn = document.getElementById("reset-btn");

submitBtn.addEventListener("click", () => {
  //checking for numbers
  const inputValue = billAmount.value;
  const personsValue = persons.value;
  const pattern = /^[0-9]*$/g;

  //if input value does not match a digit
  if (!inputValue.match(pattern)) {
    errorMessage[0].classList.add("active");
  } else if (inputValue.match(pattern)) {
    errorMessage[0].classList.remove("active");
  }
  if (!personsValue.match(pattern)) {
    errorMessage[1].classList.add("active");
  } else if (personsValue.match(pattern)) {
    errorMessage[1].classList.remove("active");
  }
  //if both value match the digit pattern then calculate the value
  if (inputValue.match(pattern) && personsValue.match(pattern)) {
    let totalAmount = inputValue / personsValue;
    result.innerHTML = totalAmount;
  }
});
//reset all input field to zero
resetBtn.addEventListener("click", () => {
  result.innerHTML = "0";
  billAmount.value = "";
  persons.value = "";
});
