window.addEventListener('load', () => {

    // Deshabilitar el botón de enviar del formulario de DAW.
    document.getElementById('formDAW').addEventListener('submit', function(e) {
        e.preventDefault();
        const btnSMR = document.getElementById('submitSMR');
        btnSMR.disabled = true;
        alert('Matriculación en el ciclo de grado superior DAW realizada con éxito.');
    });

    // Deshabilitar el botón de enviar del formulario de SMR.
    document.getElementById('formSMR').addEventListener('submit', function(e) {
        e.preventDefault();
        const btnDAW = document.getElementById('submitDAW');
        btnDAW.disabled = true;
        alert('Matriculación en el ciclo de grado medio SMR realizada con éxito.');
    });
});
