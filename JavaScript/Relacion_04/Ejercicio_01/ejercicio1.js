function invertirCadena() {
    var cadena = document.getElementById("cadena").innerText;
    console.log(cadena);
    // Crea una nueva estancia Array.
    var array = Array.from(cadena);
    // El método reverse afecta al original (por referencia).
    array.reverse(); 
    // Devolvemos el array invertido.
    array.join("");
}