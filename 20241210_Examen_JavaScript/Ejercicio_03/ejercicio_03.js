document.addEventListener('keydown', (e) => {

    const $parrafo = document.getElementById('parrafo');

    if (e.code === "F12") {
        $parrafo.classList.toggle('color2');
    }
});

document.addEventListener('click', (e) => {

    const $parrafo = document.getElementById('parrafo');
    const $contenedor = document.getElementById('resultado');

    if (e.target.matches("#btnInvertir")) {
        // Separamos las palabras del párrafo.
        const palabras = $parrafo.textContent.split(' ');
        // Invertimos el orden de las palabras.
        const palabrasAlReves = palabras.reverse().join(' ');
        $contenedor.textContent = `Párrafo invertido: ${palabrasAlReves}`;
    }

    if(e.target.matches("#btnCrear")) {
        const $btnOcultar = document.getElementById("btnOcultar");
        $btnOcultar.style.display = "inline-block";
    }

    if(e.target.matches("#btnOcultar")) {
        const $btnOcultar = e.target;
        $btnOcultar.style.display = "none";
    }

    if (e.target.matches("#btnConvertir")) {
        // Creamos el selector.
        const $selector = document.createElement('select');
        $selector.id = 'selector';
        // Creamos las opciones.
        const $opcion1 = document.createElement('option');
        $opcion1.textContent = 'Mayúsculas';
        $opcion1.value = 'mayusculas';

        const $opcion2 = document.createElement('option');
        $opcion2.textContent = 'Minúsculas';
        $opcion2.value = 'minusculas';

        // Añadimos las opciones al selector.
        $selector.appendChild($opcion1);
        $selector.appendChild($opcion2);

        // Colocamos el selector justo debajo del párrafo.
        $contenedor.after($selector);

        // Añadimos el evento al selector.
        $selector.addEventListener('change', () => {
            const valor = $selector.value;
            if (valor === 'mayusculas') {
                $parrafo.textContent = $parrafo.textContent.toUpperCase();
            } else {
                $parrafo.textContent = $parrafo.textContent.toLowerCase();
            }
        });
    }
});