function invertirCadena() {
    var cadena = document.getElementById("cadena").value;
    console.log(cadena);
    // Crea una nueva estancia Array.
    var array = Array.from(cadena);
    // El método reverse afecta al original (por referencia).
    array.reverse(); 
    // Devolvemos el array invertido.
    document.getElementById("resultado").innerText = array.join("");
}