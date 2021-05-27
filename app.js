const text = document.querySelector(".input");
const ul = document.querySelector(".list");
let tasks = [];

const updateOutput = (x) => {
  const btn = document.createElement("input");
  btn.setAttribute("type", "checkbox");
  btn.id = "btn";

  const li = document.createElement("label");
  li.htmlFor = "btn";
  li.className = "li";
  li.innerHTML = x + "<br>";

  ul.appendChild(btn);
  ul.appendChild(li);

  tasks.push(x);
  console.log("-->", tasks);

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
