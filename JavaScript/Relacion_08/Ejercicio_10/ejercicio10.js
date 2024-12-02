document.addEventListener("DOMContentLoaded", () => {
    const $parrafos = document.querySelectorAll("#parrafos p");
    const $boton = document.getElementById("btnMostrar");

    $boton.addEventListener("click", () => {

        $parrafos.forEach(parrafo => {
            parrafo.style.display = "none";
        });

        for (let i = 0; i < $parrafos.length; i++) {
            setTimeout(() => {
                $parrafos[i].style.display = "block";
            }, i * 1000); // Incremento del tiempo en 1 segundo por párrafo.
        }
        // Desactivamos el botón después de que todos los párrafos se hayan mostrado.
        setTimeout(() => {
            $boton.disabled = true;
            $boton.textContent = "No hay más párrafos";
        }, $parrafos.length * 1000);
    });
});
