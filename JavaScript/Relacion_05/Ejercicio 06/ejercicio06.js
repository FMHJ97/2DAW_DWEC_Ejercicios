function crearParrafos() {
    // Si no existen los párrafos, los crea.
    if(document.getElementById('parrafos') == null) {
        // Creamos un nodo Div que contendrá los párrafos.
        var divParrafos = document.createElement('div');
        divParrafos.setAttribute('id','parrafos');

        // Bucle para crear los párrafos.
        for (let i = 1; i <= 5; i++) {
            // Creamos un nodo Parrafo para crear los párrafos.
            let parrafo = document.createElement('p');
            let texto = document.createTextNode(`Soy el párrafo número ${i}`);
            // Agregamos el texto al nodo párrafo.
            parrafo.appendChild(texto);
            // Lo agregamos al contenedor de los párrafos.
            divParrafos.appendChild(parrafo);
        }

        // Insertamos divParrafos,
        var contenedor = document.getElementById('container');
        contenedor.appendChild(divParrafos);
    }
}

function invertirParrafos() {
    if(document.getElementById('parrafos') != null) {
        // Obtenemos todos los párrafos.
        var parrafos = document.querySelectorAll('p');
        // Convertimos a Array.
        var arrayParrafos = Array.from(parrafos);
        // Invertimos elementos.
        arrayParrafos.reverse();

        // Accedemos al contenedor de los párrafos creados y vaciamos contenedor.
        var divParrafos = document.getElementById('parrafos');
        divParrafos.innerHTML='';
        
        // Agregamos cada párrafo invertido al contendor limpio.
        arrayParrafos.forEach(parrafo => {
            divParrafos.appendChild(parrafo);
        });
    }
}