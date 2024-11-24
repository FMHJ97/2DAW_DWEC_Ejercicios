document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById('text_area');
    const contadorActual = document.getElementById('contadorActual');
    const MAX_CARACTERES = 100;

    textarea.addEventListener('keypress', (e) => {
        // Permitir teclas especiales: retroceso, suprimir, izquierda, derecha
        const keyCode = e.keyCode;
        const textoActual = textarea.value;
        if (
            keyCode === 8 || // Retroceso
            keyCode === 46 || // Suprimir
            keyCode === 37 || // Flecha izquierda
            keyCode === 39 // Flecha derecha
        ) {
            return; // Permitir estas teclas
        }
        // Verificar si ya alcanzó el límite de caracteres
        if (textoActual.length >= MAX_CARACTERES) {
            e.preventDefault();
        }
    });

    textarea.addEventListener('keyup', () => {
        const textoActual = textarea.value;
        contadorActual.textContent = textoActual.length;
    });

});
