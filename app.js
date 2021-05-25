const text = document.querySelector(".input");
const ul = document.querySelector(".list");
let tasks = [];

const updateOutput = (x) => {
  const btn = document.createElement("input");
  btn.setAttribute("type", "checkbox");
  btn.id = "id";
  btn.className = "btn";

  const li = document.createElement("label");
  li.htmlFor = "id";
  li.className = "li";
  li.appendChild(document.createTextNode(x));
  // li.innerText = x;

  ul.appendChild(btn);
  ul.appendChild(li);

  tasks.push(li.innerText);

  console.log("-->", tasks);
};

text.addEventListener("keyup", function (event) {
  let listVal = text.value;
  if ((event.keyCode === 13) & (listVal !== "")) {
    updateOutput(listVal);
    text.value = "";
  }
});
