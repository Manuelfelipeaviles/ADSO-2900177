// Funcion:hacer multiplicacion del 1 hasta el 5 y que el 1 se le sume 1, asi sucesivamente hasta llegar a 5 y mirar si es bass o buzz con el for
// Autor: manuel felipe aviles perdomo
// Fecha: lunes 03 de abril de 2024
const mostrarContadorMultiplicacion = (tabla,multiplicar)=>{
    let cmult
    let resultado;
    let par;
    let impar;
    let ctabla;
    par = 0;
    impar = 0;
    for (ctabla = 1 ; ctabla <= tabla ; ctabla ++) {
        for(cmult=1; cmult<=multiplicar;cmult++){
            resultado = ctabla*cmult;
            if(resultado%2==0){
                console.log("buzz")
                par= par+1
            }else{
                impar = impar+1
                console.log("bass")
            }
            console.log(ctabla," x ",cmult," = ",resultado);
        }
    }
    console.log("Total de par",par)
    console.log("Total de impar",impar)
}

function mostrarContadorMultiplicacion2(tabla2,multiplicar2){
let cmult2;
let resultado2;
let par2;
let impar2;
let ctabla2;
par2 = 0;
impar2 = 0;
for (ctabla2 = 1 ; ctabla2 <= tabla2 ; ctabla2 ++) {
    for(cmult2=1; cmult2<=multiplicar2;cmult2++){
        resultado2 = ctabla2*cmult2;
        if(resultado2%2==0){
            console.log("buzz")
            par2= par2+1
        }else{
            impar2 = impar2+1
            console.log("bass")
        }
        console.log(ctabla2," x ",cmult2," = ",resultado2);
    }
}
console.log("Total de par",par2)
console.log("Total de impar",impar2)
}