document.addEventListener("DOMContentLoaded", () => {
    const $cuadrados = document.querySelectorAll(".cuadrado");

    $cuadrados.forEach(cuadrado => {
        cuadrado.addEventListener("mouseenter", () => {
            document.body.style.backgroundColor = cuadrado.dataset.color;
        });
        cuadrado.addEventListener("mouseout", () => {
            document.body.style.backgroundColor = "";
        });
    });
});
