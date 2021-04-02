var button = document.querySelector("#btn-translate");
var textArea = document.querySelector("#text-area");


function clickHandler(){
    console.log("input",textArea.value);
}

button.addEventListener("click", clickHandler)
