// Variables
const $nombre = document.getElementById("nombre");
const $edad = document.getElementById("edad");
const $salario = document.getElementById("salario");

// Eventos
document.addEventListener("click", (e) => {
    if (e.target.matches("#calcular")) {
        calcularSalarioFinal();
    }
});

// Funciones:

// Calcular salario final.
function calcularSalarioFinal() {
    // Seleccionamos el contenedor Resultado.
    const $resultado = document.getElementById("resultado");

    // Comprobamos el valor del salario.
    if ($salario.value > 2000) {
        // El salario final es el mismo.
        $resultado.innerText = `El salario final de ${$nombre.value} es de ${$salario.value}€`;
    } else if ($salario.value >= 1000 && $salario.value <= 2000) {
        // Comprobamos la edad.
        if ($edad.value > 50) {
            // El salario final es el 10% más.
            $resultado.innerText = `El salario final de ${$nombre.value} es de ${$salario.value * 1.10}€`;
        } else {
            // El salario final es el 5% más.
            $resultado.innerText = `El salario final de ${$nombre.value} es de ${$salario.value * 1.05}€`;
        }
    } else if ($salario.value < 1000) {
        // Comprobamos la edad.
        if ($edad.value > 60) {
            // El salario final es el 20% más.
            $resultado.innerText = `El salario final de ${$nombre.value} es de ${$salario.value * 1.20}€`;
        } else if ($edad.value < 50) {
            // El salario final es el 7.5% más.
            $resultado.innerText = `El salario final de ${$nombre.value} es de ${$salario.value * 1.075}€`;
        } else {
            // El salario final es el 15% más.
            $resultado.innerText = `El salario final de ${$nombre.value} es de ${$salario.value * 1.15}€`;
        }
    }
}