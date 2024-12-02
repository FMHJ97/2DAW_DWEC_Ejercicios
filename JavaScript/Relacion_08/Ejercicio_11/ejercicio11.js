document.addEventListener('DOMContentLoaded', () => {

    // Seleccionamos todos los párrafos.
    const $parrafos = document.querySelectorAll('p');

    // Ahora cada párrafo lo separamos en palabras y guardamos la primera palabra
    $parrafos.forEach(parrafo => {
        // Separamos el parrafo en palabras.
        let palabras = parrafo.textContent.split(' ');
        // Guardamos la primera palabra.
        let primeraPalabra = palabras[0];
        // Guardamos el resto del parrafo.
        // Unimos las palabras a partir de la segunda palabra.
        let restoParrafo = palabras.slice(1).join(' ');

        // Creamos un nuevo parrafo con la primera palabra y el resto del parrafo oculto.
        parrafo.innerHTML = `<span class="primera-palabra">${primeraPalabra}</span> <span class="resto-parrafo" style="display:none;">${restoParrafo}</span>`;

        // Seleccionamos los spans creados.
        const primeraPalabraSpan = parrafo.querySelector('.primera-palabra');
        const restoParrafoSpan = parrafo.querySelector('.resto-parrafo');

        // Mostramos el resto del parrafo al pasar el ratón por encima de la primera palabra.
        primeraPalabraSpan.addEventListener('mouseover', () => {
            restoParrafoSpan.style.display = 'inline'; // Lo mostramos justo a continuación de la primera palabra
        });

        // Ocultamos el resto del parrafo al quitar el ratón de la primera palabra.
        primeraPalabraSpan.addEventListener('mouseout', () => {
            restoParrafoSpan.style.display = 'none';
        });

    });
});