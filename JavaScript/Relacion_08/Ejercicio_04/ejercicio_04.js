document.addEventListener("DOMContentLoaded", () => {

    // Al cargar la página.
    window.onload = () => {
        // Obtenemos el número introducido por el usuario.
        let num = prompt("Introduzca un número entero positivo:");
        // Calculamos el factorial del número introducido.
        calcularFactorial(num);
    }

    // Función para calcular el factorial de un número.
    function calcularFactorial(num) {
        // Comprobamos que el número introducido es un número entero positivo.
        if (Number.isInteger(parseInt(num)) && num > 0) {
            // Variable para almacenar el resultado.
            let factorial = 1;
            // Calculamos el factorial.
            for (let i = 1; i <= num; i++) {
                factorial *= i;
            }
            // Mostramos el resultado.
            alert(`El factorial de ${num} es: ${factorial}`);
        } else {
            if (num == 0) {
                // Mostramos un mensaje de error.
                alert("El factorial de 0 es 1.");
                return;
            }
            // Mostramos un mensaje de error.
            alert("El número introducido no es un número válido.");
        }
    }

});