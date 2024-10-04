// Funcion:hacer multiplicacion del 1 hasta el 5 y que el 1 se le sume 1, asi sucesivamente hasta llegar a 5 y mirar si es bass o buzz con el while
// Autor: manuel felipe aviles 
// Fecha: lunes 03 de abril de 2024
const  mostrarContadorConMultiplicacion =(cantidad,contador)=>{
    let resultado;
    let numero ;
    let  impar= 0;
    let par = 0;
    numero = 0;
    while(cantidad<=5){
        numero = cantidad;
        contador =  1;
        while(contador<=5){
            resultado= numero*(contador)
            
            console.log(` ${numero}  x  ${contador} = ${resultado}`);
            if (resultado%2==0) {
                par+=1;
                console.log("buzz")
            }else{
                impar+=1;
                console.log("bass")
            }
            contador++;
        }
        cantidad++;
    }
    console.log(impar)
    console.log(par)
}

function mostrarcontadorConMultiplicacion2 (cantidad2,contador2){
    let resultado2;
    let numero2 ;
    let  impar2= 0;
    let par2 = 0;
    numero2 = 0;
    while(cantidad2<=5){
        numero2 = cantidad2;
        contador2 =  1;
        while(contador2<=5){
            resultado2= numero2*(contador2)
            
            console.log(` ${numero2}  x  ${contador2} = ${resultado2}`);
            if (resultado2%2==0) {
                par2+=1;
                console.log("buzz")
            }else{
                impar2+=1;
                console.log("bass")
            }
            contador2++;
        }
        cantidad2++;
    }
    console.log(impar2)
    console.log(par2)
}














