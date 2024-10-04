// Funcion: operacion con suma,resta,division y por ultimo multiplicacion 
// Autor: Manuel felipe aviles 
// Fecha: lunes 01 de abril de 2024
let max = 3;
let numero = Math.random()*max;
numero = Math.round(numero)
let palabra = ["El resultado de tu suma fue: ","El resultado de tu resta fue: ","El resultado de tu division fue: ","El resultado de tu multiplicacion fue: "]
const operacion = function resul(num1,num2) {
    let suma = num1+num2;
    let resta  = num1-num2;
    let division =  num1 / num2;
    let multiplicacion = num1 * num2;
    let resultado = [suma,resta,division, multiplicacion];
    return resultado[numero];
}




// diferente manera de hacer 
let numUno;
let numDos;
const suma = function (pnumUno, pnumDos){
    let sumar;
    numUno = pnumUno;
    numDos = pnumDos;
    sumar = numUno + numDos;
    return sumar;
}
const restar = function (pnumUno, pnumDos){
    let resta;
    numUno = pnumUno;
    numDos = pnumDos;
    resta = numUno + numDos;
    return resta; 
}
const multiplicacion = function (pnumUno, pnumDos){
    let multiplicar;
    numUno = pnumUno;
    numDos = pnumDos;
    multiplicar = numUno * numDos;
    return multiplicar; 
}
const division = function (pnumUno, pnumDos){
    let dividir;
    numUno = pnumUno;
    numDos = pnumDos;
    dividir = numUno / numDos;
    return dividir; 
}
const Operaciones = function(poperador, pnumUno , pnumDos){
    let operador = poperador;
    numUno = pnumUno;
    numDos = pnumDos;
    if(operador == "suma"){
        return suma(numUno,numDos);
    }
    else  if(operador == "resta"){
        return restar(numUno,numDos);
    }
    else  if(operador == "multiplicacion"){
        return multiplicacion(numUno,numDos);
    }
    else  if(operador == "division"){
        return division(numUno,numDos);
    }
    else {
        return "Error!!! no reconoce operador";
    }
}
 function suma1 (pnumUno, pnumDos){
    let sumar1;
    numUno = pnumUno;
    numDos = pnumDos;
    sumar1 = numUno + numDos;
    return sumar1;
}
function restar1 (pnumUno, pnumDos){
    let resta1;
    numUno = pnumUno;
    numDos = pnumDos;
    resta1 = numUno + numDos;
    return resta1; 
}
function multiplicacion1 (pnumUno, pnumDos){
    let multiplicar1;
    numUno = pnumUno;
    numDos = pnumDos;
    multiplicar1 = numUno * numDos;
    return multiplicar1; 
}
function division1 (pnumUno, pnumDos){
    let dividir1;
    numUno = pnumUno;
    numDos = pnumDos;
    dividir1 = numUno / numDos;
    return dividir1; 
}
 function Operaciones1(poperador, pnumUno , pnumDos){
    let operador1 = poperador;
    numUno = pnumUno;
    numDos = pnumDos;
    if(operador1 == "suma1"){
        return suma1(numUno,numDos);
    }
    else  if(operador1 == "resta1"){
        return restar1(numUno,numDos);
    }
    else  if(operador1 == "multiplicacion1"){
        return multiplicacion1(numUno,numDos);
    }
    else  if(operador1 == "division1"){
        return division1(numUno,numDos);
    }
    else {
        return "Error!!! no reconoce operador";
    }
}