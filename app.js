const button = document.querySelector("#btn-translate");
const textArea = document.querySelector("#text-area");
const output = document.querySelector(".output");

serverURL = "https://api.funtranslations.com/translate/minion.json";

function getURL(text) {
  return serverURL + "?text=" + text;
}

function errHandler(err) {
  console.log("Error occured:" + err);
  alert("something went wrong ;(");
}

function clickHandler() {
  let inputText = textArea.value;

  //getting info from server by doing fetch call
  fetch(getURL(inputText))
    .then((res) => res.json())
    .then((data) => {
      output.innerText = data.contents.translated;
    })
    .catch(errHandler);
}

button.addEventListener("click", clickHandler);
