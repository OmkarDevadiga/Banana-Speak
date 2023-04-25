var btnTranslate = document.querySelector("#btn-translate");
var btnReset = document.querySelector("#btn-reset");
var textInput = document.querySelector("#txt-input");
var textOutput = document.querySelector("#output");

textInput.focus();

function constructUrl(text){
    var url = "https://api.funtranslations.com/translate/yoda.json?text=" + text;
    return url;
}


function clickHandler(){
    var input = textInput.value;
    var output = fetch(constructUrl(input))
                .then(response => response.json())
                .then(json => {
                    var translatedText = json.contents.translated;
                    textOutput.innerText = translatedText;                       
                    })
};



btnTranslate.addEventListener("click", clickHandler);

function reset(){
    textInput.value = '';
    textOutput.textContent = '';
}; 

btnReset.addEventListener("click", reset);