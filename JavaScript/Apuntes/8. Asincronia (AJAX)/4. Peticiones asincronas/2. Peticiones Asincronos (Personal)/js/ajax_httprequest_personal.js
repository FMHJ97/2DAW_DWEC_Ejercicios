// Función anónima autoejecutable.
// Su estructura es la siguiente:
//
// 1. Se declara una función anónima.
// 2. Se encierra entre llaves las sentencias a realizar.
// 3. Se añade un par de paréntesis al final de la función.
// (() => {
//     console.log("Soy una función anónima autoejecutable");
// })();

// Función anónima autoejecutable para XMLHttpRequest.
(() => {
  const d = document,
    $xhr = d.getElementById("xhr"), // Obtiene el elemento con el id "xhr".
    $fragment = d.createDocumentFragment(); // Crea un fragmento de documento vacío.

  // Paso 1: Instanciar un Objeto XMLHttpRequest.
  const xhr = new XMLHttpRequest(); // Variable distinta de $xhr (variable que apunta al DOM).
  // console.log(xhr);

  // Paso 2: Asignar eventos a la petición.

  // En este caso, se asigna directamente el evento "readystatechange".
  // Se ejecuta la función anónima cuando se produce un cambio de estado.
  xhr.addEventListener("readystatechange", (e) => {
    // console.log(xhr.readyState); // Muestra el estado de la petición.

    // Vamos a insertar nuestro código.
    // Existen 5 estados de la petición: 0, 1, 2, 3 y 4.
    // Si el estado de la petición no es 4, no hacemos nada.
    if (xhr.readyState !== 4) return;
    
    // Comprobamos si el estado de la respuesta HTTP está entre 200 y 300.
    // Si es así, ha tenido éxito.
    if (xhr.status >= 200 && xhr.status < 300) {
      // $xhr.innerHTML = xhr.responseText; // Insertamos la respuesta en el elemento con id "xhr".

      // Tenemos los datos en formato texto. Ahora, debemos convertirlos a JSON.
      // Existen dos formas de hacerlo: JSON.parse() y JSON.stringify().
      // JSON.parse() convierte un texto JSON en un objeto JavaScript.
      // JSON.stringify() convierte un objeto JavaScript en un texto JSON.
      // Usaremos JSON.stringify() para enviar datos al servidor y JSON.parse() para recibirlos.
      let json = JSON.parse(xhr.responseText); // Convertimos la respuesta a JSON.
      // console.log(json); // Muestra el contenido del objeto JSON.

      // Recorremos cada uno de los elementos del objeto JSON.
      json.forEach((row) => {
        // Creamos un elemento "li".
        const $li = d.createElement("li");
        // Insertamos el contenido de cada fila en el elemento "li".
        $li.innerHTML = `${row.barrio} -- ${row.calle} -- ${row.telefono}`;
        // Insertamos el elemento "li" en el fragmento de documento.
        $fragment.appendChild($li);
      })

      // Insertamos el fragmento de documento en el elemento con id "xhr".
      $xhr.appendChild($fragment);
    }
    else {
      // Mensaje de error.
      let mensaje = xhr.statusText || "Ocurrió un error en la petición"; // Operador cortocircuito.
      // Insertamos el mensaje de error en el elemento con id "xhr".
      $xhr.innerHTML = `Código: ${xhr.status} => Mensaje: ${mensaje}`;
    }
  })

  // Paso 3: Abrir una petición.
  
  // Podemos pasar la URL de la API directamente al método "open", o
  // pasar el fichero JSON local.
  xhr.open("GET", "https://datos.vigo.org/data/deportes/ins-complejos.json");

  // Paso 4: Enviar la petición.
  xhr.send();

})();
