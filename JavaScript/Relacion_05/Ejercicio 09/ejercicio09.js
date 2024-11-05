function agregarParrafo() {
    // Crear un nuevo elemento de tipo parrafo.
    var parrafo = document.createElement('p');
    // Crear un nodo de texto.
    var texto = document.createTextNode('Soy un nuevo párrafo.');
    // Agregamos el nodo de texto al nodo parrafo.
    parrafo.appendChild(texto);
    // Accedemos al primer párrafo de la página.
    var primerParrafo = document.getElementById('parrafo1');
    // Insertamos el nuevo párrafo justo después del primer párrafo.
    primerParrafo.after(parrafo);
}