let resultNumber = Math.floor(Math.random() * 20);
const button = document.getElementById("check");
const guessNumber = document.getElementById("user-input");
const result = document.getElementById("result");
const reset = document.getElementById("reset");
let message = "";
let count = 10;
reset.addEventListener("click", function () {
  resultNumber = Math.floor(Math.random() * 20);
  count = 10;
  result.innerHTML = "";
  guessNumber.value = "";
  reset.disabled = true;
  result.classList.remove("success");
  result.classList.remove("error");
});
button.addEventListener("click", function () {
  if (count === 1) {
    message = "You lost";
    result.innerHTML = message;
    result.classList.add("error");
    button.disabled = false;
    reset.disabled = false;
    return;
  }
  if (!guessNumber.value) {
    message = "Please input guess number";
    result.innerHTML = message;
    result.classList.add("error");
  } else if (Number(guessNumber.value) < resultNumber) {
    count--;
    message = `Your number is lower, you have ${count} guess left`;
    result.innerHTML = message;
    result.classList.add("error");
  } else if (Number(guessNumber.value) > resultNumber) {
    count--;
    message = `Your number is higher, you have ${count} guess left`;
    result.innerHTML = message;
    result.classList.add("error");
  } else {
    message = "Congrads, you won !!!";
    result.innerHTML = message;
    result.classList.remove("error");
    result.classList.add("success");
    reset.disabled = false;
  }
});
