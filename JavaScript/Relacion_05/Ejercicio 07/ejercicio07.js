function ordenar() {
    // Obtenemos el contenedor de los párrafos.
    var contenedor = document.getElementById('divElementos');
    // Obtenemos los párrafos.
    var parrafos = contenedor.children;
    // Creamos un array donde guardaremos los párrafos.
    var arrayParrafos = Array.from(parrafos);
    // Ordenamos el array (accedemos al contenido de los párrafos).
    arrayParrafos.sort(function(a, b) {
        return a.textContent.localeCompare(b.textContent);
    });
    // Vaciamos el contenedor.
    contenedor.innerHTML = '';
    // Añadimos los párrafos ordenados.
    arrayParrafos.forEach(parrafo => {
        contenedor.appendChild(parrafo);
    });
}