// Funcion saber las edades de tres personas 
// Autor: manuel felipe aviles perdomo 
// Fecha: lunes 03 de abril de 2024
const edades =(fechaN1,fechaN2,fechaN3)=>{
    let edad1 = 2024-fechaN1;
    let edad2 = 2024-fechaN2;
    let edad3 = 2024-fechaN3;
    let promedio;   
    if(edad1>17){
        console.log(`el primer chico es mayor de edad: `,edad1);
    }
    else{
        console.log("el primer chico no es mayor de edad: ",edad1);
    }
    if(edad2>17){
        console.log(`el segundo chico es mayor de edad: `,edad2);
    }
    else{
        console.log("el segundo chico no es mayor de edad: ",edad2);
    }
    if(edad3>17){
        console.log(`el tercer chico es mayor de edad: `,edad3);
    }
    else{
        console.log("el tercer chico no es mayor de edad: ",edad3);
    }
    promedio = (edad1+edad2+edad3)/3;
    console.log("El promedio de tus edades es: ",promedio)
}

function edades2 (fechaN4,fechaN5,fechaN6){
    let edad4 = 2024-fechaN4;
    let edad5 = 2024-fechaN5;
    let edad6 = 2024-fechaN6;
    let promedio;   
    if(edad4>17){
        console.log(`el primer chico es mayor de edad: `,edad4);
    }
    else{
        console.log("el primer chico no es mayor de edad: ",edad4);
    }
    if(edad5>17){
        console.log(`el segundo chico es mayor de edad: `,edad5);
    }
    else{
        console.log("el segundo chico no es mayor de edad: ",edad5);
    }
    if(edad6>17){
        console.log(`el tercer chico es mayor de edad: `,edad6);
    }
    else{
        console.log("el tercer chico no es mayor de edad: ",edad6);
    }
    promedio = (edad4+edad5+edad6)/3;
    console.log("El promedio de tus edades es: ",promedio)
}