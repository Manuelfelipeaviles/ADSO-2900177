// Funcion comparar tres numero y mirar cual es el mayor,sino son igules
// Autor: manuel felipe aviles 
// Fecha: lunes 03 de abril de 2024
const comparacion =(num1,num2,num3)=>{
    if(num1==num2 && num1==num3 && num2==num3){
        console.log("Los numeros son iguales");
    }
    else{
        if (num1>num2 && num1>num3){
            console.log(`el numero ${num1 }  es mayor`)
        }
        else{
            if(num2>num1 && num2> num3){
                console.log(`el numero ${num2} es mayor `)
            }else{
                console.log(`el numero ${num3} es mayor`)
            }
        }
    }
}

function comparacion2(num4,num5,num6){
    if(num4==num5 && num4==num6 && num5==num6){
        return"Los numeros son iguales";
    }
    else{
        if (num4>num5 && num4>num6){
            return`el numero ${num4 }  es mayor`;
        }
        else{
            if(num5>num4 && num5> num6){
                return`el numero ${num5} es mayor `;
            }else{
                return`el numero ${num6} es mayor`;
            }
        }
    }
}