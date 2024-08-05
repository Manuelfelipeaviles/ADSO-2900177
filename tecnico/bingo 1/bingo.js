document.addEventListener('DOMContentLoaded', function() {
    let tablas = [];
    let resultado;
    let numeroTabla;
    let numeroMultiplo;

    // Generar las tablas de multiplicar
    for (let iteracionTabla = 0; iteracionTabla < 6; iteracionTabla++) {
        numeroTabla = iteracionTabla + 1;
        let multiplo = [];
        for (let iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            numeroMultiplo = iteracionMultiplo + 1;
            resultado = numeroTabla * numeroMultiplo;
            multiplo.push(resultado);
        }
        tablas.push(multiplo);
    }

    // Llenar los divs en el HTML
    for (let iteracionTabla = 0; iteracionTabla < 6; iteracionTabla++) {
        let print = '<div class="tabla">';//crear el cotenedor de la tabla
        for (let iteracionMultiplo = 0; iteracionMultiplo < 5; iteracionMultiplo++) {
            print += '<div class="fila">';//crear la fila
            for (let iteracion = 0; iteracion < 5; iteracion++) {
                // Determinar la clase de la celda
                let claseCelda = 'celda';
                
                // Resaltar las columnas específicas para las primeras tres tablas
                if (iteracionTabla < 3 && iteracion === iteracionTabla) {
                    claseCelda += ' highlight'; //esto sirve para destacar
                }

                // Resaltar "X" en la cuarta tabla
                if (iteracionTabla === 3 && (iteracion === iteracionMultiplo || iteracion === 4 - iteracionMultiplo)) {
                    claseCelda += ' highlight';
                }
                else{
                    claseCelda+= "";
                }

                // Resaltar tres "X" en la quinta tabla
                if (iteracionTabla === 4) {
                    if ((iteracion === iteracionMultiplo * 8  || iteracion === 2 - iteracionMultiplo || iteracion === 4 - iteracionMultiplo || iteracionMultiplo === 2 &&  iteracion === 4 || iteracionMultiplo === 4 &&  iteracion === 2))
                        claseCelda += ' highlight'; {

                    }
                }

                // Resaltar una "V" en la sexta tabla
                if (iteracionTabla === 5) {
                    if (
                        (iteracionMultiplo === 0 && (iteracion === 0 || iteracion === 4)||(iteracionMultiplo === 1 && (iteracion === 1 || iteracion === 3)||(iteracionMultiplo === 2 && (iteracion === 2)))) 
                    ) {
                        claseCelda += ' highlight';
                    }
                }
                // Añadir la celda con la clase correspondiente y el valor de la tabla
                print += '<div class="' + claseCelda + '">' + tablas[iteracionTabla][iteracionMultiplo * 5 + iteracion] + '</div>';
            }
            print += '</div>';// Cerrar la fila
        }
        print += '</div>';// Cerrar el contenedor de la tabla
        document.getElementById('tabla' + (iteracionTabla + 1)).innerHTML = print;
    }
});
        
    