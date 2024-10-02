// Array de letras para el cálculo de la letra del DNI.
var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

// Función para calcular la letra correspondiente al número de DNI.
function getLetter() {

    // Obtenemos el elemento input del número de DNI.
    var num_dni = document.getElementById('numeros').value;

    // Parseamos el valor del input a un número entero.
    let num = parseInt(num_dni);

    // Verificamos que el valor sea un número válido.
    if (isNaN(num) || num < 0 || num_dni.length !== 8) {
        alert("Por favor, introduzca un número de DNI válido de 8 dígitos.");
        return;
    }    
    
    // Calculamos el índice correspondiente.
    let index = num % 23;

    // Obtenemos el valor correspondiente en el array.
    let letter = letras[index];

    // Mostramos la letra correspondiente.
    alert(`La letra correspondiente al número DNI ${num} es ${letter}`);
}

// Función para comprobar si el DNI completo es correcto.
function checkDNI() {

    // Obtenemos el valor del input del DNI.
    var dni = document.getElementById('dni').value;
    
    // Verificamos que el formato sea correcto: 8 números y 1 letra.
    let dniRegex = /^[0-9]{8}[A-Z]$/;
    
    if (!dniRegex.test(dni)) {
        alert("El formato del DNI es incorrecto. Debe tener 8 números seguidos de una letra mayúscula.");
        return;
    }

    // Extraemos los números del DNI (los primeros 8 caracteres).
    let numeros = parseInt(dni.slice(0, 8));
    // Extraemos la letra (último carácter).
    let letra = dni.slice(-1);

    // Obtenemos la letra correspondiente a los números del DNI.
    let ind_letra = numeros % 23;
    let letra_dni = letras[ind_letra];

    // Comparamos las letras para comprobar si existe coincidencia.
    if (letra === letra_dni) {
        alert("El DNI es correcto.");
    } else {
        alert(`El DNI es incorrecto. La letra debería ser ${letra_dni}.`);
    }
}
