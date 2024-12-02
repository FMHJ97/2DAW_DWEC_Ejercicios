// Creación y escritura de la tabla primitiva.
document.addEventListener("DOMContentLoaded", () => {
    // Generamos la tabla primitiva.
    generarTablaPrimitiva();

    // Botón para rellenar la tabla con los números de la primitiva.
    const $boton = document.getElementById("btnRellenar");

    $boton.addEventListener("click", () => {
        // Obtenemos todas las celdas de la tabla.
        const $celdas = document.querySelectorAll("#tbody td");
        // Obtenemos los números de la primitiva.
        const numerosPrimitiva = getNumerosPrimitiva();

        console.log(numerosPrimitiva);

        // Reinicio de las celdas.
        $celdas.forEach(celda => {
            celda.classList.remove("marcado");
        });

        // Marcamos las celdas que coincidan con los números de la primitiva.
        numerosPrimitiva.forEach(num => {
            $celdas.forEach(celda => {
                if (celda.textContent == num) celda.classList.add("marcado");
            });
        });
    });
});

/**
 * Función que genera 6 números aleatorios (1-49) y los devuelve.
 * @returns 
 */
function getNumerosPrimitiva() {
    const numeros = new Set();
    while (numeros.size < 6) {
        let num = Math.floor((Math.random() * 49) + 1);
        numeros.add(num);
    }
    return numeros;
}

/**
 * Función que genera una tabla primitiva de 10 filas y 5 columnas (1-49).
 */
function generarTablaPrimitiva() {
    // Selecciono el elemento <tbody>
    let $tabla = document.getElementById("tbody");

    // Valor de cada celda.
    let contador = 1;
    // Bucle para obtener 10 filas.
    for (let i = 0; i < 10; i++) {
        // Creación de etiqueta <tr>.
        const fila = document.createElement("tr");
        // Bucle para obtener 5 columnas x fila.
        for (let j = 0; j < 5; j++) {
            // Creación de etiqueta <tr>.
            const celda = document.createElement("td");
            // La primera celda no tendrá valor (ni border, css).
            if (i == 0 && j == 0) {
                celda.classList.add("no-border");
            } else {
                // Insertamos valor en celda.
                celda.textContent = contador;
                // Siguiente valor.
                contador++;
            }
            // Agregamos la celda a la fila.
            fila.appendChild(celda);
        }
        // Agregamos la fila con las columnas asignadas a la tabla.
        $tabla.appendChild(fila);
    }
}