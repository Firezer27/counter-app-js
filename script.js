const increaseEle = document.getElementById("increment");
const resetEle = document.getElementById("reset");
const decreaseEle = document.getElementById("decrement");
const displayEle = document.querySelector(".display");

let count = 0;
increaseEle.addEventListener("click", () => {
  count++;
  console.log(count);
  displayEle.textContent = count;
  localStorage.setItem("key", count);
});

resetEle.addEventListener("click", () => {
  count = 0;
  displayEle.textContent = 0;
  localStorage.setItem("key", count);
});

decreaseEle.addEventListener("click", () => {
  count--;
  console.log(count);
  displayEle.textContent = count;
  localStorage.setItem("key", count);
});

if (Number(localStorage.getItem("key")) == null) {
  displayEle.textContent = 0;
} else {
  displayEle.textContent = Number(localStorage.getItem("key"));
}
