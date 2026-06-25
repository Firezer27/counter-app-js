const increaseEle = document.getElementById("increment");
const resetEle = document.getElementById("reset");
const decreaseEle = document.getElementById("decrement");
const displayEle = document.querySelector(".display");

let count = 0;
increaseEle.addEventListener("click", () => {
  count++;
  updatedDisplay();
});

resetEle.addEventListener("click", () => {
  count = 0;
  updatedDisplay();
});

decreaseEle.addEventListener("click", () => {
  count--;
  updatedDisplay();
});

function updatedDisplay() {
  displayEle.textContent = count;
  localStorage.setItem("counterValue", count);
}
let counterValues = JSON.parse(localStorage.getItem("key"));
if (counterValues == null) {
  displayEle.textContent = 0;
} else {
  displayEle.textContent = Number(counterValues);
}
