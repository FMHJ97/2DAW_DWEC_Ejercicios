// c) Añadir campos de marca y modelo si se selecciona "Ordenador portátil" (1 punto)

const tipoReparacion = document.querySelector('#tipoReparacion');
tipoReparacion.addEventListener('change', () => {
  if (tipoReparacion.value === 'portatil') {
    
    const marcaInput = document.createElement('input');
    marcaInput.setAttribute('placeholder', 'Marca');

    const modeloInput = document.createElement('input');
    modeloInput.setAttribute('placeholder', 'Modelo');

    const referencia = document.querySelector('#antiguedad');
    referencia.before(marcaInput, modeloInput);
  }
});
