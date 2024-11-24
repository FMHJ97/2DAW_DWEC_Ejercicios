document.addEventListener("DOMContentLoaded", () => {

    // Al cargar la página se ejecuta el siguiente código.
    window.onload = () => {
        // Cambiar el fondo de la página a un color aleatorio
        document.body.style.backgroundColor = generarColorAleatorio();

        // Mostrará el prompt pasados 1 segundos.
        setTimeout(() => {
            // Pedimos un número al usuario.
            const inputUsuario = prompt("Introduce un número:");

            // Comprobamos si el valor introducido es un número.
            if (esNumero(inputUsuario)) alert("Has introducido un número válido.");
            else alert("Lo que has introducido no es un número.");

        }, 1000);

    };

    // Función para generar un color aleatorio en formato RGB.
    function generarColorAleatorio() {
        const r = Math.floor(Math.random() * 256); // Valor rojo (0-255)
        const g = Math.floor(Math.random() * 256); // Valor verde (0-255)
        const b = Math.floor(Math.random() * 256); // Valor azul (0-255)
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Función para verificar si el valor introducido es un número válido.
    function esNumero(valor) {
        return !isNaN(valor) && valor.trim() !== "";
    }

});