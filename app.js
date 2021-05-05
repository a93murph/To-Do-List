const input = document.querySelector("input");
const ul = document.querySelector(".list-none");

const updateOutput = (x) => {
  const li = document.createElement("li");
  ul.appendChild(li);
  li.innerText += x;
  li.className = "toggle";
};

input.addEventListener("keyup", function (event) {
  let listVal = input.value;
  if (event.keyCode === 13) {
    updateOutput(listVal);
    input.value = "";
  }
});
