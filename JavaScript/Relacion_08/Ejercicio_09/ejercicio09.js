document.addEventListener("DOMContentLoaded", () => {

    // Inputs.
    const $inputKms = document.getElementById("kms");
    const $inputMs = document.getElementById("ms");
    const $inputKgs = document.getElementById("kgs");
    const $inputGs = document.getElementById("gs");

    // Botones.
    const $btnDistancia = document.getElementById("convertDistancia");
    const $btnPeso = document.getElementById("convertPeso");

    // Limpiar el contenido del otro campo cuando se hace focus.
    $inputKms.addEventListener("focus", () => $inputMs.value = "");
    $inputMs.addEventListener("focus", () => $inputKms.value = "");
    $inputKgs.addEventListener("focus", () => $inputGs.value = "");
    $inputGs.addEventListener("focus", () => $inputKgs.value = "");

    // Conversión de distancia
    $btnDistancia.addEventListener("click", () => {
        // Comprobamos si se ha introducido un valor en kilómetros.
        if ($inputKms.value) {
            const kms = parseFloat($inputKms.value);
            // Comprobamos si el valor es un número.
            // Si es un número, multiplicamos por 1000 para obtener los metros.
            if (!isNaN(kms)) $inputMs.value = kms * 1000;
            else alert("Por favor, introduce un valor numérico válido en kilómetros.");
        }
        // Comprobamos si se ha introducido un valor en metros.
        else if ($inputMs.value) {
            const ms = parseFloat($inputMs.value);
            // Comprobamos si el valor es un número.
            // Si es un número, dividimos por 1000 para obtener los kilómetros.
            if (!isNaN(ms)) $inputKms.value = ms / 1000;
            else alert("Por favor, introduce un valor numérico válido en metros.");
        }
        else {
            alert("Por favor, introduce un valor en al menos un campo de distancia.");
        }
    });

    // Conversión de peso
    $btnPeso.addEventListener("click", () => {
        // Comprobamos si se ha introducido un valor en kilogramos.
        if ($inputKgs.value) {
            // Convertimos el valor a entero.
            const kgs = parseFloat($inputKgs.value);
            // Comprobamos si el valor es un número.
            // Si es un número, multiplicamos por 1000 para obtener los gramos.
            if (!isNaN(kgs)) $inputGs.value = kgs * 1000;
            else alert("Por favor, introduce un valor numérico válido en kilogramos.");
        }
        // Comprobamos si se ha introducido un valor en gramos.
        else if ($inputGs.value) {
            // Convertimos el valor a entero.
            const gs = parseFloat($inputGs.value);
            // Comprobamos si el valor es un número.
            // Si es un número, dividimos por 1000 para obtener los kilogramos.
            if (!isNaN(gs)) $inputKgs.value = (gs / 1000);
            else alert("Por favor, introduce un valor numérico válido en gramos.");
        }
        // Si no se ha introducido ningún valor, mostramos un mensaje.
        else {
            alert("Por favor, introduce un valor en al menos un campo de peso.");
        }
    });
});
