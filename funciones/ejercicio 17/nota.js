// Funcion saber las tres notas de un estudiantes y mirar su promedio  si pasa el año o no JAJAJA😂
// Autor: manuel felipe aviles perdomo
// Fecha: lunes 03 de abril de 2024
const notas =(nota1,nota2,nota3)=>{
    let notafinal;
    notafinal = nota1*(20/100);
    notafinal += nota2*(20/100);
    notafinal += nota3*(20/100);
    if(notafinal>4.5){
        console.log(`la calificación es sobresaliente con ${notafinal}`)
    }else{
        if (notafinal<=4.5 && notafinal>=3.5) {
            console.log(`la calificación es buena con ${notafinal}`)
        }
        else{
        if (notafinal<=3.5 && notafinal>=3) {
            console.log(`la calificación es media con ${notafinal}`)
        }
        else{
            console.log(`la calificación es insuficiente con ${notafinal}`)
        }
        }
    }
    }

function mostrarNotas (nota4,nota5,nota6){
    let notafinal2;
    notafinal2 = nota4*(20/100);
    notafinal2 += nota5*(20/100);
    notafinal2 += nota6*(20/100);
    if(notafinal2>4.5){
        console.log(`la calificación es sobresaliente con ${notafinal2}`)
    }else{
        if (notafinal2<=4.5 && notafinal2>=3.5) {
            console.log(`la calificación es buena con ${notafinal2}`)
        }
        else{
        if (notafinal2<=3.5 && notafinal2>=3) {
            console.log(`la calificación es media con ${notafinal2}`)
        }
        else{
            console.log(`la calificación es insuficiente con ${notafinal2}`)
        }
        }
    }
    }