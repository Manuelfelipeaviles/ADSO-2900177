// primer ejercicio de  arreglo con js 
// yerson stiven cuellar rubiano
// 29/abril/2024



let arregloNumero = [2,4,6,8,10,12,13,14,16,18];
let arregloFrutas =["manco","fresa","banano","sarasa","papaya"]

// console.log("mostrar frutas: "+arregloFrutas[3]);
// console.log("mostrar numero: "+arregloNumero[6]);


// console.log("mostrar frutas: "+arregloFrutas);
// console.log("mostrar numero: "+arregloNumero);

for(i=0; i<arregloFrutas.length; i++){
    console.log("mostrar numero :"+arregloFrutas[i]);
}
for(i=0; i<arregloNumero.length; i++){
    console.log("mostrar numero :"+arregloNumero[i]);
}



// contenedor matriz

let matriz = [
    [1,2,3],
    [4,5,6,11],
    [7,8,9]
];
console.log("matriz: " + matriz);

console.log(matriz);

console.log(matriz[1][2]);


for(i=0; i<matriz.length; i++){
    for(j=0; j<matriz[i].length; j++){
        console.log(matriz[i][j]);
    }
}