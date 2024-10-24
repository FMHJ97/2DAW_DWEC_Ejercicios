// Clase Pelicula.
class Pelicula {
    // Validamos los datos antes de insertar los valores parámetros.
    constructor(id, titulo, director, anioEstreno, paises, generos, calificacion) {
        this.id = this.validarID(id);
        this.titulo = this.validarTitulo(titulo);
        this.director = director;
        this.anioEstreno = this.validarAnio(anioEstreno);
        this.paises = this.validarPaises(paises);
        this.generos = this.validarGeneros(generos);
        this.calificacion = this.validarCalificacion(calificacion);
    }

    // Método estático que devuelve los géneros aceptados.
    static get generosAceptados() {
        return [
            "Action", "Adult", "Adventure", "Animation", "Biography", "Comedy",
            "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir",
            "Game-Show", "History", "Horror", "Musical", "Music", "Mystery",
            "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport",
            "Talk-Show", "Thriller", "War", "Western"
        ];
    }

    // Validar ID
    validarID(id) {
        const regex = /^[a-zA-Z]{2}\d{7}$/;
        if (!regex.test(id)) {
            throw new Error("El ID debe tener 9 caracteres, los primeros 2 letras y los 7 restantes números.");
        }
        return id;
    }

    // Validar Título
    validarTitulo(titulo) {
        if (titulo.length > 100) {
            throw new Error("El título no puede superar los 100 caracteres.");
        }
        return titulo;
    }

    // Validar Año de Estreno
    validarAnio(anioEstreno) {
        const regex = /^\d{4}$/;
        if (!regex.test(anioEstreno)) {
            throw new Error("El año de estreno debe ser un número de 4 dígitos.");
        }
        return anioEstreno;
    }

    // Validar País o Países
    validarPaises(paises) {
        if (!Array.isArray(paises) || paises.length === 0) {
            throw new Error("El país o los países deben ser introducidos en forma de array.");
        }
        return paises;
    }

    // Validar Géneros
    validarGeneros(generos) {
        if (!Array.isArray(generos) || generos.length === 0) {
            throw new Error("Los géneros deben ser introducidos en forma de array.");
        }
        for (let genero of generos) {
            if (!Pelicula.generosAceptados.includes(genero)) {
                throw new Error(`El género ${genero} no es aceptado. Los géneros válidos son: ${Pelicula.generosAceptados.join(", ")}.`);
            }
        }
        return generos;
    }

    // Validar Calificación
    validarCalificacion(calificacion) {
        if (typeof calificacion !== 'number' || calificacion < 0 || calificacion > 10) {
            throw new Error("La calificación debe ser un número entre 0 y 10.");
        }
        return calificacion;
    }

    // Método para mostrar la ficha técnica
    fichaTecnica() {
        return `
        Título: ${this.titulo}
        Director: ${this.director}
        Año de estreno: ${this.anioEstreno}
        País(es): ${this.paises.join(", ")}
        Género(s): ${this.generos.join(", ")}
        Calificación: ${this.calificacion}
      `;
    }
}

// Array con información de 3 películas
const peliculasInfo = [
    {
        id: "AB1234567",
        titulo: "Película A",
        director: "Director A",
        anioEstreno: 2022,
        paises: ["México", "España"],
        generos: ["Action", "Drama"],
        calificacion: 8.5
    },
    {
        id: "CD7654321",
        titulo: "Película B",
        director: "Director B",
        anioEstreno: 2019,
        paises: ["Estados Unidos"],
        generos: ["Comedy", "Family"],
        calificacion: 7.3
    },
    {
        id: "EF9876543",
        titulo: "Película C",
        director: "Director C",
        anioEstreno: 2020,
        paises: ["Francia", "Alemania"],
        generos: ["Thriller", "Horror"],
        calificacion: 9.1
    }
];

// Crear instancias de Película e imprimir la ficha técnica
peliculasInfo.forEach(info => {
    const pelicula = new Pelicula(
        info.id,
        info.titulo,
        info.director,
        info.anioEstreno,
        info.paises,
        info.generos,
        info.calificacion
    );
    console.log(pelicula.fichaTecnica());
});  