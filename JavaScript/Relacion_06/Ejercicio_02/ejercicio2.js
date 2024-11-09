function initialize() {
    document.addEventListener("click", (e) => {
        if (e.target.matches("#enlace1")) toggleDisplay("enlace1", "parrafo1");
        if (e.target.matches("#enlace2")) toggleDisplay("enlace2", "parrafo2");
        if (e.target.matches("#enlace3")) toggleDisplay("enlace3", "parrafo3");
        if (e.target.matches("#aumentar1") || e.target.matches("#disminuir1") || e.target.matches("#defecto1")) changeFontSize(e, "parrafo1");
        if (e.target.matches("#aumentar2") || e.target.matches("#disminuir2") || e.target.matches("#defecto2")) changeFontSize(e, "parrafo2");
        if (e.target.matches("#aumentar3") || e.target.matches("#disminuir3") || e.target.matches("#defecto3")) changeFontSize(e, "parrafo3");
    })
}
// Función que varía entre las clases "visible" y "hidden" de un párrafo
// según el enlace que se haya pulsado. Cuando el enlace pone "Ocultar",
// el párrafo se oculta y el enlace cambia a "Mostrar".
function toggleDisplay(idEnlace, idParrafo) {
    // Obtenemos los elementos del DOM.
    let parrafo = document.getElementById(idParrafo);
    let enlace = document.getElementById(idEnlace);
    // Cambiamos las clases del párrafo.
    parrafo.classList.toggle("visible");
    parrafo.classList.toggle("hidden");
    // Cambiamos el texto del enlace.
    if (parrafo.classList.contains("visible")) enlace.textContent = `Ocultar contenido del ${idParrafo}`;
    else enlace.textContent = `Mostrar contenido del ${idParrafo}`;
}
// Función que aumenta, reduce o resetea el tamaño de la fuente de un párrafo
// según el botón pulsado. Aumenta o disminuye el tamaño en 1px.
function changeFontSize(event, idParrafo) {
    // Obtenemos los elementos del DOM.
    let parrafo = document.getElementById(idParrafo);
    let boton = event.target;
    // Obtenemos el tamaño actual de la fuente.
    // Usamos window.getComputedStyle para obtener el tamaño de la fuente
    // cuando se haya aplicado el estilo CSS, ya que si usamos
    // parrafo.style.fontSize obtendríamos el tamaño en píxeles
    // que se haya aplicado directamente al elemento (inline style).
    let fontSize = parseInt(window.getComputedStyle(parrafo).fontSize);
    // Cambiamos el tamaño de la fuente.
    if (boton.matches("#aumentar1") || boton.matches("#aumentar2") || boton.matches("#aumentar3")) fontSize++;
    else if (boton.matches("#disminuir1") || boton.matches("#disminuir2") || boton.matches("#disminuir3")) fontSize--;
    else if (boton.matches("#defecto1") || boton.matches("#defecto2") || boton.matches("#defecto3")) fontSize = 16;
    // Asignamos el nuevo tamaño de la fuente.
    parrafo.style.fontSize = `${fontSize}px`;
}