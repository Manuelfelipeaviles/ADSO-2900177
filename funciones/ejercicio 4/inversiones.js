// Funcion de las inversiones  de tres personas 
// Autor: Manuel felipe aviles perdomo 
// Fecha: lunes 02 de abril de 2024
const totalidad =(dinero1,dinero2,dinero3)=>{
    let valor1 = dinero1; 
    let valor2 = dinero2; 
    let valor3 = dinero3; 
    let valorSinInteres = valor1 + valor2 +valor3;
    console.log("el valor sin interes de la inversion: ",valorSinInteres)
    let ganancia1 = dinero1*(30/100);
    let ganancia2 = dinero2*(30/100);
    let ganancia3 = dinero3*(40/100);
    return (ganancia1 + ganancia2 + ganancia3);
    
}
function inversion(dinero1,dinero2,dinero3){
    let valor1 = dinero1; 
    let valor2 = dinero2; 
    let valor3 = dinero3; 
    let valorSinInteres = valor1 + valor2 +valor3;
    console.log("el valor sin interes de la inversion: ",valorSinInteres)
    let ganancia1 = dinero1*(30/100);
    let ganancia2 = dinero2*(30/100);
    let ganancia3 = dinero3*(40/100);
    return (ganancia1 + ganancia2 + ganancia3);
    
}