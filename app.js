const input = document.querySelector("input");
const ul = document.querySelector(".list");
let tasks = [];

const updateOutput = (x) => {
  const li = document.createElement("div");
  li.className = "li";
  ul.appendChild(li);
  li.innerText += x;
  tasks.push(li.innerText);
  // li.setAttribute("type", "checkbox");

  console.log("-->", tasks);
};

input.addEventListener("keyup", function (event) {
  let listVal = input.value;
  if (event.keyCode === 13) {
    updateOutput(listVal);
    input.value = "";
  }
});
