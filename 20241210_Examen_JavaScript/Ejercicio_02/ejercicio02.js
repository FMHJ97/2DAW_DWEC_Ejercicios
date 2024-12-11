document.addEventListener("DOMContentLoaded", () => {

    const $contenedor = document.getElementById("contenedor");
    const $resultado = document.getElementById("resultado");

    generarTabla($contenedor);

    // Rellenamos la tabla con números al azar entre 10 y 80.
    const $celdas = document.querySelectorAll("td");
    $celdas.forEach(celda => {
        celda.textContent = Math.floor(Math.random() * 71) + 10;
    });

    const $btnGenerar = document.getElementById("btnGenerar");
    $btnGenerar.addEventListener("click", () => {

    });

});

function generarTabla(elemento) {
    const tabla = document.createElement("table");
    // Aplicamos estilos a la tabla.
    tabla.style.border = "2px solid black";
    tabla.style.borderCollapse = "collapse";

    for (let i = 0; i < 10; i++) {
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
    elemento.appendChild(tabla);
}