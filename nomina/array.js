// let factura =[
//     {codigo: 0, pedido:""}
// ];
// let numeroPerson  = prompt("cuantas persona son");
// let pedidop = "";
// for (let i = 0; i < numeroPerson; i++) {
//      pedidop = prompt("pizza:18.000\n perrocamiente:6.000\n gaseosa:6.000\n que va perdir la persona");
//     factura[0].codigo = i
//     factura[0].pedido = pedidop;
// }

// let ver =prompt("quiere ver la factura");


// if(ver=="si"){
//         alert(`persona ${factura[0].codigo} tu pedido fue:  \n ${factura[0].pedido}`);
// }else {
//     alert("gracias por su compra");
// }
// let factura = [
//     {id:1,nombreProducto:"agua",cantidad:1,valorProducto:"2000"},
//     {id:2,nombreProducto:"limonada",cantidad:3,valorProducto:"3000"},
//     {id:3,nombreProducto:"papa",cantidad:5,valorProducto:"2500"},
//     {id:4,nombreProducto:"naranjada",cantidad:2,valorProducto:"5000"},
//     {id:5,nombreProducto:"cholupa",cantidad:7,valorProducto:"2000"},
//     {id:6,nombreProducto:"lulo",cantidad:2,valorProducto:"8000"},
// ]
// let pagoTotal = 0;
// let information = [];
// let iteracion;
// for(iteracion = 0; iteracion < factura.length; iteracion++){
//     pagoTotal = factura[iteracion].valorProducto * factura[iteracion].cantidad;
//     information.push(factura[iteracion].nombreProducto,factura[iteracion].cantidad,factura[iteracion].valorProducto,pagoTotal+"\n");
// }
// console.log(`pago total: ${information}`);

let sueldoPersona = 1300000;
let sueldoConDescuento = 0;
let transporte = 113000
let bono = 100000
let pensionp = [];
let saludp = [];
let arlp = [];
let sueldoTotal = [];
let nomina = [
    { id: 1, cedula: 1075225115, nombre: "yerson", apellido: "rubiano", edad: 18, estratos: 2, valorDia: 120000, diaTrabajado: 24 },
    { id: 2, cedula: 1080291867, nombre: "ingrid", apellido: "medina", edad: 12, estratos: 1, valorDia: 35000, diaTrabajado: 14 },
    { id: 3, cedula: 1077723426, nombre: "santiago", apellido: "guerrero", edad: 12, estratos: 1, valorDia: 200000, diaTrabajado: 27 },
    { id: 4, cedula: 1075793094, nombre: "natalia", apellido: "osorio", edad: 17, estratos: 1, valorDia: 50000, diaTrabajado: 28 },
    { id: 5, cedula: 1077724121, nombre: "camilo", apellido: "ramirez", edad: 17, estratos: 0, valorDia: 70000, diaTrabajado: 17 }
]

for (let iteracion = 0; iteracion < nomina.length; iteracion++) {
    sueldoTotal.push(descuento((nomina[iteracion].valorDia * nomina[iteracion].diaTrabajado), sueldoPersona, nomina[iteracion].estratos));
    console.log(`tu sueldo total: ${sueldoTotal[iteracion]} de ${nomina[iteracion].nombre}`);
    function pension(psueldo) {
        return psueldo * 0.16;
    }
    function salud(psueldo) {
        return psueldo * 0.12;
    }
    
    function arl(psueldo) {
        return psueldo * 0.052;
    }
    function descuento(pvalor, psueldo, pestrato) {
        if (pvalor <= psueldo * 2) {
            pensionp.push(pension(pvalor));
            saludp.push(salud(pvalor));
            arlp.push(arl(pvalor));
            pvalor = pvalor + transporte;
            pvalor = pvalor - (pensionp[iteracion] + saludp[iteracion] + arlp[iteracion]);
            if (pestrato == 1 || pestrato == 2) {
                pvalor = pvalor + bono;
                return pvalor
            }
            else {
                pvalor = pvalor + 0;
                return pvalor
    
            }
        } else {
            if (pvalor >= psueldo * 4 && pvalor < psueldo * 6) {
                
                sueldoConDescuento = pvalor * 0.03;
                pvalor = pvalor - sueldoConDescuento;
                pensionp.push(pension(pvalor));
                saludp.push(salud(pvalor));
                arlp.push(arl(pvalor));
                pvalor = pvalor - (pensionp[iteracion] + saludp[iteracion] + arlp[iteracion]);
                return pvalor
    
            } else if (pvalor >= psueldo * 6 && pvalor < psueldo * 8) {
                sueldoConDescuento = pvalor * 0.04;
                pvalor = pvalor - sueldoConDescuento;
                pensionp.push(pension(pvalor));
                saludp.push(salud(pvalor));
                arlp.push(arl(pvalor));
                pvalor = pvalor - (pensionp[iteracion] + saludp[iteracion] + arlp[iteracion]);
                return pvalor
    
            } else if (pvalor >= psueldo * 8 && pestrato == 6) {
                sueldoConDescuento = pvalor * 0.05;
                pvalor = pvalor - sueldoConDescuento;
                pensionp.push(pension(pvalor));
                saludp.push(salud(pvalor));
                arlp.push(arl(pvalor));
                pvalor = pvalor - (pensionp[iteracion] + saludp[iteracion] + arlp[iteracion]);
                return pvalor
    
            }
            else {
                console.log("no se le hace ninguna retencion")
                pensionp.push(pension(pvalor));
                saludp.push(salud(pvalor));
                arlp.push(arl(pvalor));
                pvalor = pvalor - (pensionp[iteracion] + saludp[iteracion] + arlp[iteracion]);
                return pvalor
    
            }
    
        }
    }
}
