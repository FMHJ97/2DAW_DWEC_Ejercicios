// b) Permitir texto blanco sobre fondo negro en un área de texto (0,5 puntos)

const areaTexto = document.querySelector('#areaTexto');
areaTexto.addEventListener('click', () => {
  areaTexto.style.backgroundColor = 'black';
  areaTexto.style.color = 'white';
});
