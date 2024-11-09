function initialize() {
    // Función que registra la posición del ratón en el evento mousemove
    // y la muestra en el elemento con id "cuadroTexto".
    // Además, cambial el color de fondo del navegador a azul.
    document.addEventListener("mousemove", (e) => {
        let cuadroTexto = document.getElementById("cuadroTexto");
        cuadroTexto.textContent = `Posición del ratón: (${e.clientX}, ${e.clientY})`;
        document.querySelector("body").style.backgroundColor = "blue";
    });
    // Función que registra la tecla pulsada en el evento keydown y
    // la muestra en el elemento con id "cuadroTexto" con su respectivo
    // código ASCII. // Además, cambial el color de fondo del navegador a rojo.
    document.addEventListener("keydown", (e) => {
        let cuadroTexto = document.getElementById("cuadroTexto");
        cuadroTexto.textContent = `Tecla pulsada: ${e.key} (código ASCII: ${e.keyCode})`;
        document.querySelector("body").style.backgroundColor = "red";
    });
}