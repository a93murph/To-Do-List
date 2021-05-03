const input = document.querySelector("input");
// const output = document.querySelector(".output");

const updateOutput = (x) => {
  const ul = document.querySelector(".list-none");
  const li = document.createElement("li");
  ul.appendChild(li);
  // li.innerHTML = <input type="button" />;
  li.innerText += x;
};

input.addEventListener("keyup", function (event) {
  let listVal = input.value;
  if (event.keyCode === 13) {
    updateOutput(listVal);
    // li.innerHTML = (
    //   <input
    //     type="button"
    //     class="m-8 p-4 px-10 w-1/2 text-3xl font-thin italic shadow-xl outline-none"
    //   />
    // );
    input.value = "";
  }
});
