// Funcion hacer la tabla del 9 que multiplique hasta 5 y ver los resultado si son par o impar
// Autor: manuel felipe aviles 
// Fecha: lunes 03 de abril de 2024
const mostrarContador =(numero)=>{
    let resultado = 0;
    for(contador=1;contador<=5;contador++){
      resultado =numero*contador;
      console.log(`${numero} x ${contador}= ${resultado}`);
      if(resultado%2==0){
       console.log("Este es par");
      }
      else{
       console.log("Este es impar");
      }
    }
}

function mostrarContador2(numero2){
  let resultado2 = 0;
  for(contador2=1;contador2<=5;contador2++){
    resultado2 =numero2*contador2;
    console.log(`${numero2} x ${contador2}= ${resultado2}`);
    if(resultado2%2==0){
     console.log("Este es par");
    }
    else{
     console.log("Este es impar");
    }
  }
}
