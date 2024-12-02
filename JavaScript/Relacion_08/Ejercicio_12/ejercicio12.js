document.addEventListener("DOMContentLoaded", () => {
    // Variables.
    const $body = document.body;

    // Eventos.
    document.addEventListener("keydown", (e) => {
        if (e.altKey && e.code === "F12") {
            $body.style.backgroundImage = "url('./assets/imagen.jpg')";
            $body.style.backgroundSize = "cover";
            // Eliminamos el contenido del body para que se vea la imagen.
            $body.textContent = "";
        }
    });
});