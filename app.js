const text = document.querySelector(".input");
const ul = document.querySelector(".list");
let tasks = [];

const updateOutput = (x) => {
  const btn = document.createElement("input");
  btn.setAttribute("type", "checkbox");
  btn.id = "btn";
  btn.className = "btn";

  const li = document.createElement("label");
  li.setAttribute("for", btn);
  li.className = "li";
  li.innerHTML = x;

  const lineBreak = document.createElement("br");

  ul.appendChild(btn);
  ul.appendChild(li);
  ul.appendChild(lineBreak);

  ul.addEventListener("click", function () {
    if (btn.checked) {
      li.className = "striked";
    } else {
      li.className = "li";
    }
  });
};

text.addEventListener("keyup", function (event) {
  let listVal = text.value;
  if ((event.keyCode === 13) & (listVal !== "")) {
    updateOutput(listVal);
    text.value = "";
  }
});
