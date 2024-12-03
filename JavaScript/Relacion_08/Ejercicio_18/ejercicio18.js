window.addEventListener('load', () => {

    document.getElementById('formDAW').addEventListener('submit', function (e) {
        e.preventDefault();

        const $formDAW = document.getElementById('formDAW');
        const $formSMR = document.getElementById('formSMR');
        
        alert('Formulario enviado correctamente');
        $formSMR.style.display = 'none';
        // Reiniciar el formulario de SMR.
        $formDAW.reset();
    });

    document.getElementById('formSMR').addEventListener('submit', function (e) {
        e.preventDefault();
        const $formDAW = document.getElementById('formDAW');
        const $formSMR = document.getElementById('formSMR');

        alert('Formulario enviado correctamente');
        // Ocultar el formulario de DAW.
        $formDAW.style.display = 'none';
        // Reiniciar el formulario de SMR.
        $formSMR.reset();
    });
});
