// Funcion averiguar si el usuario es mayor de edad
// Autor: manuel felipe aviles 
// Fecha: lunes 03 de abril de 2024
const edadMayor =(fechaN)=>{
    let edad = 2024-fechaN;
    if(edad>17){
        console.log("Eres mayor de edad");
        return edad;
    }else{
        console.log("Eres menos de edad")
        return edad;
    }
}

function mostrarEdad(fechaNacimiento){
    let edad2 = 2024-fechaNacimiento;
    if(edad2>17){
        console.log("Eres mayor de edad");
        return edad2;
    }else{
        console.log("Eres menos de edad")
        return edad2;
    }
}