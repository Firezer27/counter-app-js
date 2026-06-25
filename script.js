const increaseEle = document.getElementById("increment");
const resetEle = document.getElementById("reset");
const decreaseEle = document.getElementById("decrement");
const displayEle = document.querySelector(".display");

let count = 0;
increaseEle.addEventListener("click", () => {
  count++;
  console.log(count);
  displayEle.textContent = count;
});
