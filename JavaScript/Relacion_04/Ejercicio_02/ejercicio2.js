// Obtenemos los valores.
var cadena = document.getElementById("cadena").value;
var subcadena = document.getElementById("subcadena").value;

// Convertimos

// Función arrow que realiza la comprobación y devuelve las coincidencias.
var comprobarCadena = (cadena,subcadena)=>{
    let cont = 0;
    let index = cadena.indexOf(subcadena);
    while (index != -1) {
        cont++;
        index = cadena.indexOf(subcadena, index + 1);
    }
    // Devolvemos el resultado.
    alert(cont);
}