var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var textOutput = document.querySelector("#output");


function clickHandler(){
    textOutput.innerText = "!@$%@%@!$!&@&!@&@! " + textInput.value ;
};

btnTranslate.addEventListener("click", clickHandler);