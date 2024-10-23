function checkVocalesConsonantes() {
    // Obtenemos la cadena introducida en minúsculas.
    let cadena = (document.getElementById("cadena").value).toLowerCase();

    // Contadores.
    let contVoc=0; let contCon=0;

    // Variable con las vocales.
    let vocales = "aeiou";

    // Recorremos el string carácter por carácter.
    for (let char of cadena) {
        // Comprobamos si es una letra. Usaremos un patrón.
        // PARA QUE SEA INTERPRETADA COMO UNA EXPRESIÓN REGULAR,
        // DEBE IR SIN COMILLAS.
        if (char.match(/[a-z]/)) {
            // Si el carácter actual es una vocal.
            if (vocales.includes(char)) {
                contVoc++;
            } else {
                // El carácter es una consonante.
                contCon++;
            }
        }
    }

    // Mostramos los resultados.
    document.getElementById("vocalesText").innerText = contVoc;
    document.getElementById("consonantesText").innerText = contCon;
}