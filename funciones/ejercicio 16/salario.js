// Funcion: mostrar el salario de un persona y si tiene mas de 4 minimos se le retiene una cantidad y se descuenta la salud,pension,arl y la retencion del suelo 
// Autor: manuel felipe aviles 

// Fecha: lunes 03 de abril de 2024
const mostrarSalario =(diaTrabajados,pagoPorDias)=>{
    let salario = diaTrabajados*pagoPorDias;
    let salario2= 1300000;
    let retener = 0;
   
    if(salario< salario2*2){
        salario+=0
    }else{
        if(salario>salario2*4){
           retener= salario*(4/100)
        }else{
           console.log(`tu salario es: ${salario}, por tanto no se retiene`)
        }
    }
    let salud =salario*(12/100)
    let pension =salario*(16/100)
    let arl = salario*(5.2/100)
    let restasaldo = salud+pension+arl+retener;
    let total = salario-restasaldo;
    console.log(total)
}

function mostrarSalario2(diaTrabajados2,pagoPorDias2){
    let salario3 = diaTrabajados2*pagoPorDias2;
    let salario4= 1300000;
    let retener2 = 0;
    if(salario3< salario4*2){
        salario3+=0
    }else{
        if(salario3>salario4*4){    
           retener2= salario3*(4/100)
        }else{
           console.log(`tu salario es: ${salario3}, por tanto no se retiene`)
        }
    }
    let salud2 =salario3*(12/100)
    let pension2 =salario3*(16/100)
    let arl2 = salario3*(5.2/100)
    let restasaldo2 = salud2+pension2+arl2+retener2;
    let total2 = salario3-restasaldo2;
    console.log(total2)
}