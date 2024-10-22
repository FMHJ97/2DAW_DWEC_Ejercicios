// Función arrow que realiza la comprobación y devuelve las coincidencias.
// Utiliza la función indexOf().
const comprobarCadena = ()=>{
    // Obtenemos los valores.
    var cadena = document.getElementById("cadena").value;
    var subcadena = document.getElementById("subcadena").value;

    let cont = 0;
    let index = cadena.indexOf(subcadena);
    while (index != -1) {
        cont++;
        index = cadena.indexOf(subcadena, index + 1);
    }
    // Devolvemos el resultado.
    document.getElementById("resultado").innerText = cont;
}