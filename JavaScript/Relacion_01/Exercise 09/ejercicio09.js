// Generar un número random entre 1 y 100.
var azar = Math.round((Math.random() * 99) + 1);
// Número de intentos.
var limit = 10;

function comprobarNum(num) {
    // Comprobamos si el número del usuario está comprendido entre 1 y 100.
    if ((num >= 1) && (num <= 100)) {
        // Comparar el número ingresado con el número random.
        if (num < azar) {
            alert("El número random es mayor.");
            limit--;
        } else if (num > azar) {
            alert("El número random es menor.");
            limit--;
        } else {
            alert(`¡Has acertado! El número random es ${azar}`);
            return; // Salir si se acierta el número.
        }

        // Verificar si se alcanzó el límite de intentos.
        if (limit == 0) {
            alert("HAS PERDIDO!!");
        } else {
            alert(`Te quedan ${limit} intentos.`);
        }
    } else {
        alert("El número debe estar comprendido entre 1 y 100");
    }
}