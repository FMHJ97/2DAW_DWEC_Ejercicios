document.addEventListener("DOMContentLoaded", () => {
    // Variables
    const $form = document.getElementById("formulario");
    const $requiredInputs = document.querySelectorAll("#formulario [required]");

    // Crear spans para los mensajes de error.
    $requiredInputs.forEach((input) => {
        const $span = document.createElement("span");
        $span.id = input.name;
        $span.textContent = "Este campo no puede estar vacío!";
        $span.classList.add("formulario-error", "hidden");
        input.insertAdjacentElement("afterend", $span);
    });

    // Evento para ocultar los mensajes de error al pulsar Limpiar.
    $form.addEventListener("reset", () => {
        $requiredInputs.forEach((input) => {
            const $span = document.getElementById(input.name);
            $span.classList.add("hidden");
        });
    });

    // Eventos
    $form.addEventListener("submit", (e) => {
        // Evitar que se envíe el formulario.
        e.preventDefault();

        // Variables
        const $user = document.querySelector("#formulario input[name='user']");
        const $pwd = document.querySelector("#formulario input[name='pwd']");
        let isValid = true;

        // Mostrar los mensajes de error si los campos están vacíos.
        $requiredInputs.forEach((input) => {
            const $span = document.getElementById(input.name);
            if (input.value === "") {
                $span.classList.remove("hidden");
                isValid = false;
            } else {
                $span.classList.add("hidden");
            }
        });

        // Comprobar si los campos están vacíos.
        if (isValid) {
            // Comprobar si el usuario y la contraseña son correctos.
            if ($user.value === "admin" && $pwd.value === "1234") {
                alert("Bienvenidos al Sistema!");
                // Limpiar los campos del formulario.
                $form.reset();
            } else {
                alert("Usuario y/o contraseña incorrecta!");
            }
        }

    });
});