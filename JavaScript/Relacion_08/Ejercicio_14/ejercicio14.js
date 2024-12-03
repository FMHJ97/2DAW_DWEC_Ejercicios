// Variables
const $btnAnalizar = document.getElementById('btnAnalizar');

$btnAnalizar.addEventListener('click', () => {

    // Obtenemos el texto del textarea.
    // Debemos acceder al valor del textarea una vez que se ha pulsado el botón,
    // ya que si lo hacemos antes, el valor será el que tenía por defecto.
    const $txtArea = document.getElementById('txtArea').value;

    // Comprobamos si el textarea está vacío.
    if ($txtArea === '') {
        alert('No has introducido ningún texto');
        return;
    }

    // Guardamos las palabras en un array
    const palabras = $txtArea.split(' ');
    const numPalabras = palabras.length;
    const primeraPalabra = palabras[0];
    const ultimaPalabra = palabras[numPalabras - 1];
    // Invertimos el array y lo convertimos en un string.
    const palabrasAlReves = palabras.reverse().join(' ');
    // Ordenamos el array y lo convertimos en un string.
    // Tener en cuenta que las mayúsculas van antes que las minúsculas.
    const palabrasOrdenadas = palabras.sort().join(' ');
    // Invertimos el array y lo convertimos en un string
    const palabrasOrdenadasAlReves = palabras.reverse().join(' ');

    // Para abrir una nueva ventana con los resultados.
    const ventana = window.open('', 'Resultados', 'width=500,height=500');

    // Titulo de la ventana.
    ventana.document.write('<title>Resultados</title>');
    // Contenido de la ventana.
    ventana.document.write('<h1>Resultados</h1>');
    ventana.document.write('<p><strong>Palabras:</strong> ' + numPalabras + '</p>');
    ventana.document.write('<p><strong>Primera palabra:</strong> ' + primeraPalabra + '</p>');
    ventana.document.write('<p><strong>Última palabra:</strong> ' + ultimaPalabra + '</p>');
    ventana.document.write('<p><strong>Palabras al revés:</strong> ' + palabrasAlReves + '</p>');
    ventana.document.write('<p><strong>Palabras ordenadas:</strong> ' + palabrasOrdenadas + '</p>');
    ventana.document.write('<p><strong>Palabras ordenadas al revés:</strong> ' + palabrasOrdenadasAlReves + '</p>');

    ventana.document.close();
});