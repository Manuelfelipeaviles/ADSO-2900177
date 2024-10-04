// Funcion ver si un  numero es mayor que el otro, sino son iguales 
// Autor: manuel felipe aviles 
// Fecha: lunes 03 de abril de 2024
const numeroMayor = (num1,num2)=>{
    if(num1==num2){
        console.log("tu numero son iguales");
    }else{
        if(num1>num2){
            console.log("tu primer numero es mayor");
        }else{
            console.log("tu segundo numero es mayor");
        }
    }
 }

 function numero(num3,num4){
    if(num3==num4){
        return "tu numero son iguales";
    }else{
        if(num3>num4){
            return "tu primer numero es mayor";
        }else{
            return "tu segundo numero es mayor";
        }
    }
 }