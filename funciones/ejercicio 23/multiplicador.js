// Funcion: hacer la multplicacion del 5 hasta el 5 y mirar si son pares o impares 
// Autor: manuel felipe aviles 
// Fecha: lunes 03 de abril de 2024
const mostrarMultiplicacion =(numero)=>{
    let resultado;
    let contador;
    resultado = 0;
    for(contador=1;contador<=5;contador++){
        resultado = numero*contador;
        console.log(resultado)
        if(resultado%2==0){
            console.log("tu numero es par")
        }else{
            console.log("tu numero es impar")
        }
    }
}

function mostrarMultiplicacion2(numero2){
    let resultado2;
    let contador2;
    resultado2 = 0;
    for(contador2=1;contador2<=5;contador2++){
        resultado2 = numero2*contador2;
        console.log(resultado2)
        if(resultado2%2==0){
            console.log("tu numero es par")
        }else{
            console.log("tu numero es impar")
        }
    }
}