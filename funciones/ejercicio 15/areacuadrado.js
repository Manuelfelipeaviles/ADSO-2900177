// Funcion: saber las areas de 3 cuadrados y mostrar cual es mayor,sino son iguales 
// Autor: manuel felipe aviles 
// Fecha: lunes 03 de abril de 2024
const areaTresCuadrados = (lado1,lado2,lado3)=>{
    let area1 = lado1*lado1;
    let area2 = lado2*lado2;
    let area3 = lado3*lado3;
    if(area1==area2 && area1==area3 && area2==area3){
        console.log("las area son iguales")
    }else{
        if(area1>area2 && area1>area3){
            console.log(`la area del cuadradro de ${lado1} es mayor que la del cuadrante de ${lado2} y ${lado3}`);
        }else{
            if(area2>area3 && area2>area1)
                console.log(`la area del cuadradro de ${lado2} es mayor que la del cuadrante de ${lado1} y ${lado3}`);
            else{
                console.log(`la area del cuadradro de ${lado3} es mayor que la del cuadrante de ${lado1} y ${lado2}`);
            }
        }
    }    
}
function areas(lado4,lado5,lado6){
    let area1 = lado4*lado4;
    let area2 = lado5*lado5;
    let area3 = lado6*lado6;
    if(area1==area2 && area1==area3 && area2==area3){
        console.log("las area son iguales")
    }else{
        if(area1>area2 && area1>area3){
            console.log(`la area del cuadradro de ${lado4} es mayor que la del cuadrante de ${lado5} y ${lado6}`);
        }else{
            if(area2>area3 && area2>area1)
                console.log(`la area del cuadradro de ${lado5} es mayor que la del cuadrante de ${lado4} y ${lado6}`);
            else{
                console.log(`la area del cuadradro de ${lado6} es mayor que la del cuadrante de ${lado4} y ${lado5}`);
            }
        }
    }    
}