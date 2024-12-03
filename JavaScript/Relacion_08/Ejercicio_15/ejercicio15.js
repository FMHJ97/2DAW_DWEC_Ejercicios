// Función que calcula el MCM de dos números.
function mcm(a, b) {
    return (a * b) / mcd(a, b);
}

// Función que calcula el MCD de dos números.
function mcd(a, b) {
    let resto;
    // Se iterará hasta que b sea 0.
    while (b !== 0) {
        resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}

// Sobreescribimos el método mcm y mcd en la clase Math.
Math.mcm = function(a, b) {
    return mcm(a, b);
}
Math.mcd = function(a, b) {
    return mcd(a, b);
}

// Variables.
const d = document;
const $btnCalcular = d.getElementById('calcular');
const $resultado = d.getElementById('resultado');

$btnCalcular.addEventListener("click", function() {
    const num1 = parseInt(d.getElementById('num1').value);
    const num2 = parseInt(d.getElementById('num2').value);

    // Comprobamos que los valores introducidos sean números.
    if (isNaN(num1) || isNaN(num2)) {
        alert("Debes introducir dos números válidos!");
        return;
    }

    // Calculamos el MCD y el MCM de los dos números.
    const mcd = Math.mcd(num1, num2);
    const mcm = Math.mcm(num1, num2);

    // Mostramos el resultado en el span
    $resultado.textContent = `El MCD es ${mcd} y el MCM es ${mcm}`;
});