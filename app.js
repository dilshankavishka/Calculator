document.getElementById("calc").addEventListener("click",calc)


function calc(){
    let number1 = new Number(document.getElementById("number1").value);
    let number2 = new Number(document.getElementById("number2").value);
    let operator= document.getElementById("operator").value;



    let result=Number();

    switch(operator){

        case "+" :  result = number1 + number2;break;
        case "-" :  result = number1 - number2;break;
        case "*" :  result = number1 * number2;break;
        case "/" :  result = number1 / number2;break;
        case "%" :  result = number1 % number2;break;
    }
    console.log(result);
    alert(result);
    
}

//console.log("hello");