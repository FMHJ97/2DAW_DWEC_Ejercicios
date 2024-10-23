function calculaYears() {
    // Obtenemos el año de la fecha introducida.
    var selectedYear = new Date(document.getElementById("fecha").value).getFullYear();

    // Obtenemos el año actual.
    var currentYear = new Date().getFullYear();

    // Mostramos el resultado de la diferencia.
    document.getElementById("resultado").innerText = (currentYear - selectedYear);
}