
const display = document.getElementById("display");

function addvalue(input){
    display.value += input;
}

function clearDisplay(){
    display.value = " ";
}

function cal(){
    try{
        display.value= eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}