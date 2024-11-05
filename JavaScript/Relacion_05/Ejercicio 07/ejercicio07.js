function ordenar() {
    // Obtenemos todos los párrafos.
    var parrafos = document.querySelectorAll('p');
    // Convertimos a Array.
    var arrayParrafos = Array.from(parrafos);
    // Ordenamos el array.
    arrayParrafos.sort((a, b) => {
        return a.textContent.localeCompare(b.textContent);
    });
    // Vaciamos el div.
    parrafos.innerHTML = '';
    // Añadimos los párrafos ordenados.
    arrayParrafos.forEach(parrafo => {
        parrafos.appendChild(parrafo);
    });
}