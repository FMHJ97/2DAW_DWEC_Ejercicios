function calculaYears() {
    
    var fecha = new Date(document.getElementById("fecha").value);

    // Obtenemos el año actual.
    var currentYear = new Date().getFullYear;

    document.getElementById("resultado").innerText = (currentYear - fecha.getFullYear());
}