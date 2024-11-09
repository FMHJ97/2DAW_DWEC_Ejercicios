function initialize() {
    document.addEventListener("click", (e) => {
        if (e.target.matches("#parrafo1")) colorPrimerParrafo();
        if (e.target.matches("#parrafo2")) colorSegundoParrafo();
        if (e.target.matches("#parrafo3")) colorTercerParrafo();
    })
}
// Función que cambia la clase de un elemento con id="parrafo1"
// a "redText", y al resto de párrafos a "blackText".
function colorPrimerParrafo() {
    // Cambiamos la clase del elemento con id="parrafo1" a "redText".
    document.getElementById("parrafo1").className = "redText";
    // Obtenemos todos los elementos <p> del documento.
    var parrafos = document.querySelectorAll("p");
    // Recorremos el array de elementos <p>.
    parrafos.forEach(parrafo => {
        // Aquellos párrafos que no tengan id="parrafo1",
        // les cambiamos la clase a "blackText".
        if (parrafo.id != "parrafo1") parrafo.className = "blackText";
    });
}
// Función que cambia la clase de un elemento con id="parrafo2"
// a "blueText", y al resto de párrafos a "blackText".
function colorSegundoParrafo() {
    // Cambiamos la clase del elemento con id="parrafo2" a "blueText".
    document.getElementById("parrafo2").className = "blueText";
    // Obtenemos todos los elementos <p> del documento.
    var parrafos = document.querySelectorAll("p");
    // Recorremos el array de elementos <p>.
    parrafos.forEach(parrafo => {
        // Aquellos párrafos que no tengan id="parrafo2",
        // les cambiamos la clase a "blackText".
        if (parrafo.id != "parrafo2") parrafo.className = "blackText";
    });
}
// Función que cambia la clase de un elemento con id="parrafo3"
// a "greenText", y al resto de párrafos a "blackText".
function colorTercerParrafo() {
    // Cambiamos la clase del elemento con id="parrafo3" a "greenText".
    document.getElementById("parrafo3").className = "greenText";
    // Obtenemos todos los elementos <p> del documento.
    var parrafos = document.querySelectorAll("p");
    // Recorremos el array de elementos <p>.
    parrafos.forEach(parrafo => {
        // Aquellos párrafos que no tengan id="parrafo3",
        // les cambiamos la clase a "blackText".
        if (parrafo.id != "parrafo3") parrafo.className = "blackText";
    });
}