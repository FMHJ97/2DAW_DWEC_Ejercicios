const $checkbox = document.querySelectorAll("input ");

document.addEventListener("keyup", (e) => {
    if (e.target.matches("#observacionesPlanta")) {
        const $textArea = e.target;
        const patron = $textArea.dataset.pattern;
        if (patron !== '') {
            const exp = new RegExp(patron);
            if (!exp.test($textArea.value)) {
                alert("Caracter no válido!");
            }
        }
    }
});

document.addEventListener("submit", (e) => {
    if (e.target.matches("#enviar")) {
        e.preventDefault();
    }

    if (e.target.matches("#limpiar")) {
        // Seleccionamos la opción Media en el selector.
        const $selector = document.getElementById(nivelLuz);
        const $opciones = $selector.querySelectorAll("option");
    }
});

// Verificamos el campo Identificador.
const $identificador = document.getElementById("idPlanta");
// Cuando dejemos de enfocar el input, realizará la comprobación.
$identificador.addEventListener("blur", (e) => {
    if (!validarIdentificador($identificador.value)) {
        alert("ERROR. El identificador debe estar compuesto por: dos dígitos menores de 6, tres letras Mayúsculas, 1 guión bajo o alto y 2 letras minúsculas.")
    }
});

//
function validarIdentificador(identificador) {
    const patron = new RegExp(/^[0-5]{2}[A-Z]{3}[_-][a-z]{2}$/);
    return patron.test(identificador);
}