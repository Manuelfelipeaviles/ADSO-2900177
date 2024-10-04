// Funcion el sueldo de una persona y descontar la salud,pension,arl del sueldo 
// Autor: manuel felipe aviles 
// Fecha: lunes 03 de abril de 2024
const mostrarSueldo=(diaTotales,pagoPorDia)=>{
    let sueldo = diaTotales*pagoPorDia;
    let salud = sueldo*(12/100);
    let pension = sueldo*(16/100);
    let arl = sueldo*(5.2/100);
    let pesototal = salud+pension+arl;
    let valortotal = sueldo-pesototal;
    return valortotal;
} 

function mostrarSueldo2(diaTotales2,pagoPorDia2){
    let sueldo = diaTotales2*pagoPorDia2;
    let salud = sueldo*(12/100);
    let pension = sueldo*(16/100);
    let arl = sueldo*(5.2/100);
    let pesototal = salud+pension+arl;
    let valortotal = sueldo-pesototal;
    return valortotal;
} 




