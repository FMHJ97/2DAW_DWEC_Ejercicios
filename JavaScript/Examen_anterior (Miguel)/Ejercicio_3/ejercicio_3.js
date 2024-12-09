// 3. Programa para rellenar una quiniela aleatoria (2,25 puntos)

function quiniela(numDobles) {
    const resultados = ['1', 'X', '2'];
    let quiniela = [];

    for (let i = 0; i < 14; i++) {
        const opciones = new Set();
        opciones.add(resultados[Math.floor(Math.random() * 3)]);

        if (numDobles > 0) {
            while (opciones.size < 2) {
                opciones.add(resultados[Math.floor(Math.random() * 3)]);
            }
            numDobles--;
        }

        quiniela.push(Array.from(opciones).join(' '));
    }

    quiniela.forEach((partido, index) => console.log(`Partido ${index + 1}: ${partido}`));
}

// Ejemplo:
quiniela(3);
