// Constante para asignar elementos al contendor.
const body = document.getElementById("body");
// Creamos el array.
const array = [];    
/*
Bucle que almacenará en el array aquellos números que sean
múltiplos de 11 Y menores de 3000.
*/
for (let i = 1; i < 3000; i++) {
    if (i % 11 == 0) {
        // Agregamos el múltiplo al final del array.
        array.push(i);
    }
}
// Función que muestra el array.
function mostrarArray() {
    // Reemplazamos el contenido del div Body con lo siguiente.
    body.innerHTML = `<p>Array = [${array.join(", ")}]</p>`;
    // Insertamos un botón a continuación para mostrar (alert) la suma.
    body.insertAdjacentHTML("beforeend",`<input type="button" value="Mostrar Suma" onclick="sumarValores()">`);
}
// Función que suma los valores del array.
function sumarValores() {
    // Variable que guardará la suma.
    let suma = 0;
    // Recorremos el array y sumaremos los valores.
    array.forEach(function(value, index) {
            suma += value;
        }
    );
    // Mostramos el resultado.
    alert(`El resultado de la suma es ${suma}`);
}            