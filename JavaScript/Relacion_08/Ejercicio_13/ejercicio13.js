document.addEventListener("DOMContentLoaded", () => {
    const $texto = document.querySelector(".contenido h1");
    let velocidad = 0;

    /**
     * Actualiza el texto de la velocidad.
     */
    function actualizarVelocidad() {
        $texto.textContent = `Velocidad ${velocidad}`;
    }

    // Evento para aumentar o disminuir la velocidad.
    document.addEventListener("keydown", (e) => {
        // Si se pulsa la flecha arriba, aumenta la velocidad.
        if (e.key === "ArrowUp") {
            // Aumenta la velocidad hasta 100.
            if (velocidad < 100) {
                velocidad++;
                actualizarVelocidad();
            }
        }
        // Si se pulsa la flecha abajo, disminuye la velocidad.
        else if (e.key === "ArrowDown") {
            // Disminuye la velocidad hasta 0.
            if (velocidad > 0) {
                velocidad--;
                actualizarVelocidad();
            }
        }
    });
});