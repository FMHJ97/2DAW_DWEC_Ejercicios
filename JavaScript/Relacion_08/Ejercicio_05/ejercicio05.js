document.addEventListener("click", (e) => {
    if (e.target.matches("#cifrar")) {
        cifrarCadena();
    }
});

// Función para cifrar una cadena.
function cifrarCadena() {

    // Variables.
    const $cadena = document.getElementById("cadena");
    const $contenedor = document.getElementById("resultado");
    const valor_encript = Math.round(Math.random() * 10); // Valor aleatorio entre 0 y 10.
    let cadena_cifrada = "";

    // Comprobamos que la cadena no esté vacía.
    if ($cadena.value === "") {
        alert("La cadena no puede estar vacía.");
        return;
    }

    // Ciframos la cadena.
    // Hay que tener en cuenta que detrás de la Z vendría de nuevo la A.
    for (let i = 0; i < $cadena.value.length; i++) {
        let caracter = $cadena.value[i];
        // Comprobamos si el caracter es una letra.
        if (caracter.match(/^[a-zA-Z]$/)) {
            // Si el caracter a cifrar es una z o Z.
            if (caracter === "z" || caracter === "Z") {
                // Utilizamos fromCharCode para convertir el valor ASCII a caracter.
                // Restamos 25 al valor ASCII para que vuelva a ser una A o a.
                caracter = String.fromCharCode(caracter.charCodeAt(0) - 25);
                // Ciframos el caracter.
                cadena_cifrada += String.fromCharCode(caracter.charCodeAt(0) + valor_encript - 1);
            } else {
                // Ciframos el caracter.
                cadena_cifrada += String.fromCharCode(caracter.charCodeAt(0) + valor_encript);
            }
        } else {
            cadena_cifrada += caracter;
        }
    }

    // Mostramos por consola el valor de encriptación.
    console.log("Valor de encriptación: " + valor_encript);

    // Mostramos la cadena encriptada.
    let texto = document.createTextNode(`Cadena cifrada: ${cadena_cifrada}`);
    $contenedor.appendChild(texto);
    let br = document.createElement("br");
    $contenedor.appendChild(br);
    let texto2 = document.createTextNode(`Valor de encriptación: ${valor_encript}`);
    $contenedor.appendChild(texto2);
}