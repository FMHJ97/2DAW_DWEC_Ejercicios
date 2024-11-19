document.addEventListener("DOMContentLoaded", () => {
    // Variables
    const d = document;
    const $form = d.getElementById("formulario");
    const $requiredInputs = d.querySelectorAll("#formulario [required]");

    // Crear spans para los mensajes de error
    $requiredInputs.forEach((input) => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("formulario-error", "hidden");
        input.insertAdjacentElement("afterend", $span);
    });

    // Validar al enviar el formulario
    d.addEventListener("submit", (e) => {
        // Evitar que se envíe el formulario.
        e.preventDefault();
        // Validar los campos requeridos.
        let isValid = true;

        $requiredInputs.forEach((input) => {
            const $span = d.getElementById(input.name);

            // Validación para input de texto
            if (input.type === "text") {
                const pattern = input.pattern;
                const regEx = new RegExp(pattern);

                if (input.value.trim() === "" || (pattern && !regEx.test(input.value))) {
                    $span.classList.remove("hidden");
                    isValid = false;
                } else {
                    $span.classList.add("hidden");
                }
            }

            // Validación para select
            if (input.tagName === "SELECT") {
                if (input.value === "") {
                    $span.classList.remove("hidden");
                    isValid = false;
                } else {
                    $span.classList.add("hidden");
                }
            }
        });

        // Si todo es válido, enviar el formulario
        if (isValid) {
            alert("Formulario enviado correctamente.");
            $form.reset();
        }
    });
});
