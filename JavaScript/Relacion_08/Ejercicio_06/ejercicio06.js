document.addEventListener("DOMContentLoaded", () => {
    generarTablaPrimitiva();
});

function generarTablaPrimitiva() {
    let $tabla = document.getElementById("tbody");

    let contador = 1;
    for (let i = 0; i < 10; i++) {
        const fila = document.createElement("tr");
        for (let j = 0; j < 5; j++) {
            const celda = document.createElement("td");
            celda.textContent = contador;
            fila.appendChild(celda);
            contador++;
        }
        $tabla.appendChild(fila);
    }
}