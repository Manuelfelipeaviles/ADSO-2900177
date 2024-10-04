// Funcion hacer el factoriar de 5 
// Autor: manuel felipe aviles  
// Fecha: lunes 03 de abril de 2024
const mostrarFactorial =(numero)=>{
    let factoria = 1;
    let contactor = 0;
    while (contactor<numero){
        contactor++;
        factoria = factoria*contactor;
    }
    return factoria;
}

function mostrarFactorial2(numero2){
    let factoria2 = 1;
    let contactor2 = 0;
    while (contactor2<numero2){
        contactor2++;
        factoria2 = factoria2*contactor2;
    }
    return factoria2;
}