const input = document.querySelector("input");
const output = document.querySelector(".output");
const updateOutput = (x) => {
  console.log("x", x);
  output.innerText += x;
};

console.log(input);

input.addEventListener("keyup", function (event) {
  let listVal = input.value;
  if (event.keyCode === 13) {
    updateOutput(listVal);
    input.value = "";
  }
});
