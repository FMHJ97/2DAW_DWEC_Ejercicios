function insertar() {
    // Obtenemos los valores de los campos.
    var contenido = document.getElementById('contenido').value;
    var posicion = document.getElementById('posicion').value;
    // Dado que el index de los elementos de la lista empieza en 0, restamos 1 a la posición.
    posicion--;
    // Obtenemos todos los elementos de la lista.
    var elementos = document.querySelectorAll('li');
    // La posición debe estar entre 1 y el número de elementos de la lista.
    if (posicion < 1 || posicion > elementos.length) {
        alert('La posición debe estar entre 1 y ' + elementos.length);
        return;
    } else {
        // Creamos un nuevo elemento de la lista.
        var item = document.createElement('li');
        // Creamos un nodo de texto con el contenido.
        var texto = document.createTextNode(contenido);
        // Agregamos el texto al nuevo elemento.
        item.appendChild(texto);
        // Insertamos el nuevo elemento en la posición indicada.
        // Para ello, insertaremos el nuevo elemento antes del elemento
        // que se encuentra en la posición indicada.
        elementos[posicion].insertAdjacentElement('beforebegin', item);
    }
}