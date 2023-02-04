/* alert, prompt 
console.log("Script is working from a different file.");
var username=prompt("Give me your username");
alert("This script works! "+username);*/

/* 1. for textarea:  document.querySelector("textarea")
2. for class btn-primary:  document.querySelector(".btn-primary")
3. for id input-btn: document.querySelector("#input-btn")
4. for attributr name="translator": document.querySelector("input[name='translator']")*/

var btnTranslate=document.querySelector("#btn-translate")
var txtInput=document.querySelector("#txt-input")
var outputDiv=document.querySelector("#output")

//var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"//
var serverUrl="	https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text){
    return serverUrl+"?text="+text;
}
/*function clickHandler()
{
    console.log("Clicked!")
    console.log("input",txtInput.value)
}
btnTranslate.addEventListener("click", clickHandler)*/
//for error handling//
function errorHandler(error)
{
    console.log("Error message",error);
    alert("something wrong with server! Try again after sometime.");
}
// Input - Output Processing //
function clickHandler()
{
    //outputDiv.innerText="Yes you are "+ txtInput.value ;
    fetch(getTranslationUrl(txtInput.value)).then(response=>response.json()).then(json=>
        {
            var translatedText=json.contents.translated;
            outputDiv.innerText=translatedText;})
            .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler);