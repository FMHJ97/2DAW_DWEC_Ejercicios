// a) Mostrar los síntomas de avería seleccionados (0,5 puntos)

function mostrarSintomasSeleccionados() {
    const sintomasSeleccionados = document.querySelectorAll('input[name="sintomas"]:checked');
    sintomasSeleccionados.forEach(sintoma => console.log(sintoma.value));
}
