const button = document.querySelector("#btn-translate");
const textArea = document.querySelector("#text-area");
const output = document.querySelector(".output");
function clickHandler() {
  output.innerText = "blah " + textArea.value;
}

button.addEventListener("click", clickHandler);
