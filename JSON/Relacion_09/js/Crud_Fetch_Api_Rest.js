const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $titulo = d.querySelector(".crud-titulo"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

const getAll = async () => {
    try {
        let respuesta = await fetch("http://localhost:5555/jugadores");
        let json = await respuesta.json();
        console.log(respuesta);
        if (!respuesta.ok) throw {
            status: respuesta.status,
            statusText: respuesta.statusText
        };
        console.log(json);

        json.forEach((el) => {
            $template.querySelector(".nombre").textContent = el.nombre;
            $template.querySelector(".dorsal").textContent = el.dorsal;
            $template.querySelector(".equipo").textContent = el.equipo;
            $template.querySelector(".posicion").textContent = el.posicion;

            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.nombre = el.nombre;
            $template.querySelector(".edit").dataset.dorsal = el.dorsal;
            $template.querySelector(".edit").dataset.equipo = el.equipo;
            $template.querySelector(".edit").dataset.posicion = el.posicion;

            $template.querySelector(".delete").dataset.id = el.id;

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });
        $table.querySelector("tbody").appendChild($fragment);
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $table.insertAdjacentHTML(
            "afterend",
            `<p><b>Error ${err.status}: ${message}</b></p>`
        );
    }
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async (e) => {
    if (e.target === $form) {
        e.preventDefault();

        if (!e.target.id.value) {

            try {
                let options = {
                    method: "POST",
                    headers: { "Content-type": "application/json; charset=utf-8" },
                    body: JSON.stringify({
                        nombre: e.target.nombre.value,
                        dorsal: e.target.dorsal.value,
                        equipo: e.target.equipo.value,
                        posicion: e.target.posicion.value,
                    }),
                },

                    respuesta = await fetch("http://localhost:5555/jugadores", options),
                    json = await respuesta.json();
                if (!respuesta.ok) throw {
                    status: respuesta.status,
                    statusText: respuesta.statusText
                };

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        } else {
            //Update - PUT
            try {
                let options = {
                    method: "PUT",
                    headers: { "Content-type": "application/json; charset=utf-8" },
                    body: JSON.stringify({
                        nombre: e.target.nombre.value,
                        dorsal: e.target.dorsal.value,
                        equipo: e.target.equipo.value,
                        posicion: e.target.posicion.value,
                    }),
                },
                    respuesta = await fetch(
                        `http://localhost:5555/jugadores/${e.target.id.value}`,
                        options
                    ),
                    json = await respuesta.json();

                if (!respuesta.ok) throw {
                    status: respuesta.status,
                    statusText: respuesta.statusText
                };

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        }

        $form.nombre.value = null;
        $form.dorsal.value = null;
        $form.equipo.value = null;
        $form.posicion.value = null;
        $form.id.value = null;
    }
});

// idéntico a lo que hicimos en el crud_ajax
d.addEventListener("click", async (e) => {
    if (e.target.matches(".edit")) {
        $titulo.textContent = "Editar Jugador";
        $form.nombre.value = e.target.dataset.nombre;
        $form.dorsal.value = e.target.dataset.dorsal;
        $form.equipo.value = e.target.dataset.equipo;
        $form.posicion.value = e.target.dataset.posicion;
        $form.id.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
        let isDelete = confirm(
            `¿Estás seguro de eliminar el id ${e.target.dataset.id}?`
        );

        if (isDelete) {
            //Delete - DELETE
            try {
                let options = {
                    method: "DELETE",
                    headers: { "Content-type": "application/json; charset=utf-8" },
                },
                    respuesta = await fetch(`http://localhost:5555/jugadores/${e.target.dataset.id}`, options);
                json = await respuesta.json();

                if (!respuesta.ok) throw {
                    status: respuesta.status,
                    statusText: respuesta.statusText
                };

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                alert(`Error ${err.status}: ${message}`);
            }
        }
    }
});