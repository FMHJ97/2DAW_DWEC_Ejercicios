// d) Validar campos obligatorios (0,5 puntos)

function validarFormulario() {
    const nombre = document.querySelector('#nombre').value;
    const apellidos = document.querySelector('#apellidos').value;
    const telefono = document.querySelector('#telefono').value;
    const numeroSerie = document.querySelector('#numeroSerie').value;
    const tipoReparacion = document.querySelector('#tipoReparacion').value;
    const sintomas = document.querySelectorAll('input[name="sintomas"]:checked');
    
    if (!nombre || !apellidos || !telefono || !numeroSerie || !tipoReparacion || sintomas.length === 0) {
      alert('Todos los campos obligatorios deben estar rellenos.');
      return false;
    }
    return true;
  }
  