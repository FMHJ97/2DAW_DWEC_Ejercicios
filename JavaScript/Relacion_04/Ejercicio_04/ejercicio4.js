function esCapicua() {
    // Obtenemos el número ingresado.
    var num = parseInt(document.getElementById("num").value);

    // Convertimos en Array el número obtenido, separando los dígitos,
    // invirtiendo el orden y devolviendo el array como un string.
    var numReverse = num.toString().split("").reverse().join("");

    // Comparamos el número original con el invertido.
    document.getElementById("resultado").innerText
        = (num==numReverse) ? "Es capicúa" : "No es capicúa";
}