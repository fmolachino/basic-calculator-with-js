function sumar(){
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
    let result = num1 + num2;
    document.getElementById("resultado").value=result;
}

function restar(){
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
    let result = num1 - num2;
    document.getElementById("resultado").value=result;
}

function multiplicar(){
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
    let result = num1 * num2;
    document.getElementById("resultado").value=result;
}

function dividir(){
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
    let result = num1 / num2;
    document.getElementById("resultado").value=result;
}

function potencia(){
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
    let result = num1**num2;
    document.getElementById("resultado").value=result;
}

function factorial(){
    let num = Number(document.getElementById("numero1").value);
    document.getElementById("resultado").value=actualFactorial(num);
}

function actualFactorial(num){
    if(num < 0){
        throw new Error("num debe ser positivo");
    }
    return num <= 1 ? 1 : num * actualFactorial(num - 1);
}

function borrar(){
    let clean = "";
    document.getElementById("numero1").value=clean;
    document.getElementById("numero2").value=clean;
    document.getElementById("resultado").value=clean;
}

