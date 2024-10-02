// Creamos el array.
var array = [6, "pepe", 2, "juan"];

// Extraemos las cadenas de texto del array para realizar la comparación.
var str1 = array[1];
var str2 = array[3];

// Extraemos los números del array.
var num1 = array[0];
var num2 = array[2];

/* Para ver si una cadena es “mayor” que otra, JavaScript utiliza
el llamado orden “de diccionario” o “lexicográfico”. En otras palabras,
las cadenas se comparan letra por letra.
Una letra mayúscula "A" no es igual a la minúscula "a".
¿Cuál es mayor? La "a" minúscula.*/
if (str1 > str2) {
    document.getElementById("comparacion").textContent = `${str1} es mayor que ${str2}`;
} else {
    document.getElementById("comparacion").textContent = `${str2} es mayor que ${str1}`;
}

// Realizamos las operaciones matemáticas básicas.
var suma = num1 + num2;
var resta = num1 - num2;
var division = num1 / num2;
var multi = num1 * num2;

// Mostramos el resultado de las operaciones.
document.getElementById("suma").textContent = `Suma: ${suma}`;
document.getElementById("resta").textContent = `Resta: ${resta}`;
document.getElementById("division").textContent = `División: ${division}`;
document.getElementById("multiplicacion").textContent = `Multiplicación: ${multi}`;