document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById('text_area');
    const contadorActual = document.getElementById('contadorActual');

    // Actualizar el contador de caracteres al mantener pulsada una tecla.
    textarea.addEventListener('keypress', () => {
        const textoActual = textarea.value;
        contadorActual.textContent = textoActual.length;
    });

    // Actualizar el contador de caracteres al soltar una tecla.
    textarea.addEventListener('keyup', () => {
        const textoActual = textarea.value;
        contadorActual.textContent = textoActual.length;
    });

});
