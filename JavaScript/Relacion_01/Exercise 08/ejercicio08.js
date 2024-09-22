var ventana;

function openWindow() {
    ventana = window.open("https://www.w3schools.com/");
}

function closeWindow() {
    if (ventana) {
        ventana.close();
    }
}