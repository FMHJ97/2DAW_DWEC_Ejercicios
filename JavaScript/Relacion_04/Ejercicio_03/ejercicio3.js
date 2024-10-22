function eliminarSubcadena() {
    // Obtenemos los valores ingresados.
    var cadena = document.getElementById("cadena").value;
    var subcadena = document.getElementById("subcadena").value;
    
    // Realizamos la eliminación de la subcadena en la cadena principal.
    // Devolverá una nueva cadena.

    // Creamos una expresión regular para realizar la operación.
    var exp = new RegExp(subcadena,"g");

    var newCadena = cadena.replace(exp,"");

    // Mostramos el resultado.
    document.getElementById("resultado").innerText = newCadena;
}