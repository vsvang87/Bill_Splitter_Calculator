const result = document.getElementById("result");
const billAmount = document.getElementById("amount");
const persons = document.getElementById("person");
const submitBtn = document.getElementById("submit-btn");
const errorMessage = document.querySelectorAll(".error");
const resetBtn = document.getElementById("reset-btn");

submitBtn.addEventListener("click", () => {
  if (billAmount.value === "") {
    errorMessage[0].classList.add("active");
    console.log("Bill amount empty");
  } else if (persons.value === "") {
    errorMessage[1].classList.add("active");
  } else if (billAmount.value != "" && persons.value != "") {
    errorMessage[0].classList.remove("active");
    errorMessage[1].classList.remove("active");
    let totalAmount = billAmount.value / persons.value;
    result.innerHTML = totalAmount;
  }
});

resetBtn.addEventListener("click", () => {
  result.innerHTML = "";
  billAmount.value = "";
  persons.value = "";
});
