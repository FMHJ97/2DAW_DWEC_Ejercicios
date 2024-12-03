document.addEventListener("DOMContentLoaded", () => {

    // Obtenemos el div que contendrá el tablero.
    const $tablero = document.getElementById("tablero");

    // Creamos el tablero.
    const tabla = document.createElement("table");
    // Aplicamos estilos al tablero.
    tabla.style.border = "2px solid black";
    tabla.style.borderCollapse = "collapse";

    // Creamos las filas y las celdas del tablero.
    for (let i = 0; i < 10; i++) {
        // Creamos la fila.
        let fila = document.createElement("tr");
        for (let j = 0; j < 10; j++) {
            let celda = document.createElement("td");
            celda.style.border = "2px solid black";
            celda.style.width = "50px";
            celda.style.height = "50px";
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    $tablero.appendChild(tabla);

    // Obtenemos el botón de colocar barcos.
    // Al hacer click en el botón, se colocarán los barcos en el tablero.
    document.getElementById("btnColocar").addEventListener("click", () => {
        // Limpiamos el tablero.
        document.querySelectorAll("td").forEach(celda => {
            celda.style.backgroundColor = "";
        });
        // Colocamos los barcos en el tablero.
        colocarBarcos();
    });

    // Función para comprobar si se puede colocar un barco en una posición determinada.
    function puedeColocarBarco(fila, columna, longitud, orientacion) {
        // Comprobamos si se puede colocar el barco en la posición indicada.
        // Para ello, recorremos las celdas adyacentes a la celda en la que 
        // se quiere colocar el barco.
        for (let i = -1; i <= longitud; i++) {
            for (let j = -1; j <= 1; j++) {
                // Si la orientación es horizontal, comprobamos la fila + j.
                // En cambio, si la orientación es vertical, comprobamos la fila + i.
                let checkFila = orientacion === 0 ? fila + j : fila + i;
                // Si la orientación es horizontal, comprobamos la columna + i.
                // En cambio, si la orientación es vertical, comprobamos la columna + j.
                let checkColumna = orientacion === 0 ? columna + i : columna + j;

                // Comprobamos si la celda adyacente es negra y si está dentro de los límites del tablero.
                // Es decir, comprobamos las celdas de alrededor de la celda en la que se quiere colocar el barco.
                // Si es así, no se puede colocar el barco.
                // En caso contrario, se puede colocar el barco.
                if (checkFila >= 0 && // Si la fila es mayor o igual a 0
                    checkFila < 10 && // y la fila es menor a 10
                    checkColumna >= 0 && // y la columna es mayor o igual a 0
                    checkColumna < 10 && // y la columna es menor a 10
                    tabla.rows[checkFila].cells[checkColumna].style.backgroundColor === "black" // y la celda es negra
                ) return false;
            }
        }
        return true;
    }

    // Función para colocar un barco en una posición aleatoria.
    function colocarBarco(longitud) {

        // Variable para controlar si se ha colocado el barco.
        let colocado = false;

        // Mientras no se haya colocado el barco, se intentará colocar en una posición aleatoria.
        while (!colocado) {
            // Generamos una fila y una columna aleatoria.
            // Los valores de fila y columna serán aleatorios entre 0 y 9.
            let fila = Math.floor(Math.random() * 10);
            let columna = Math.floor(Math.random() * 10);
            // Generamos una orientación aleatoria.
            // Si orientación es 0, el barco se colocará horizontalmente.
            // Si orientación es 1, el barco se colocará verticalmente.
            let orientacion = Math.floor(Math.random() * 2);

            // Comprobamos si se puede colocar el barco en la posición aleatoria.
            if (
                // Si la orientación es horizontal y la columna + longitud es menor o igual a 10
                // y puede colocar el barco sin tocar otro, o si la orientación es vertical y
                // la fila + longitud es menor o igual a 10 y puede colocar el barco sin tocar otro
                // se coloca el barco en la posición obtenido.
                (orientacion === 0 && columna + longitud <= 10
                    && puedeColocarBarco(fila, columna, longitud, orientacion)) // y puede colocar el barco sin tocar otro 
                ||
                (orientacion === 1 && fila + longitud <= 10 && puedeColocarBarco(fila, columna, longitud, orientacion))
            ) {
                // Colocamos el barco en la posición obtenida.
                // Recorremos la longitud del barco y pintamos las celdas.
                for (let i = 0; i < longitud; i++) {
                    // Si la orientación es horizontal, pintamos la celda en la fila y la columna + i.
                    if (orientacion === 0) {
                        tabla.rows[fila].cells[columna + i].style.backgroundColor = "black";
                    }
                    // Si la orientación es vertical, pintamos la celda en la fila + i y la columna.
                    else {
                        tabla.rows[fila + i].cells[columna].style.backgroundColor = "black";
                    }
                }
                // Cambiamos el valor de la variable colocado a true.
                // Es decir, se ha colocado el barco.
                colocado = true;
            }
        }
    }

    // Función para colocar portaviones.
    function colocarPortaviones(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            colocarBarco(4);
        }
    }

    // Función para colocar acorazados.
    function colocarAcorazados(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            colocarBarco(3);
        }
    }

    // Función para colocar destructores.
    function colocarDestructores(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            colocarBarco(2);
        }
    }

    // Función para colocar fragatas.
    function colocarFragatas(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            colocarBarco(1);
        }
    }

    // Función para colocar todos los barcos.
    // Indica la cantidad de barcos que se colocarán de cada tipo.
    function colocarBarcos() {
        colocarPortaviones(1);
        colocarAcorazados(2);
        colocarDestructores(3);
        colocarFragatas(2);
    }

});