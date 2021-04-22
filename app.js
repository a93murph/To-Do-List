const input = document.querySelector(".input");
const output = document.querySelector(".output");
const updateOutput = (x) => {
  output.innerText = x;
};

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    updateOutput(event.innerText) 
}
});
