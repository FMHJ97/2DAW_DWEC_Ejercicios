class Punto {
    // Constructor.
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Método para modificar las coordenadas de un punto.
    cambiar(newX, newY) {
        this.x = newX;
        this.y = newY;
    }

    // Método que comprueba si dos puntos están en la misma posición.
    iguales(newPunto) {
        return this.x === newPunto.x && this.y === newPunto.y;
    }

    // Método que devuelve un nuevo punto con las coordenadas sumadas
    // del punto actual y el pasado por parámetro.
    sumar(newPunto) {
        return new Punto(this.x + newPunto.x, this.y + newPunto.y);
    }

    // Método que devuelve la distancia entre el punto actual
    // y el pasado por parámetro.
    distancia(newPunto) {
        return Math.sqrt(Math.pow(this.x - newPunto.x, 2) + Math.pow(this.y - newPunto.y, 2));
    }
}

// Creación de dos puntos.
const punto1 = new Punto(2, 10);
const punto2 = new Punto(-5, 2);

// Cambio de coordenadas del punto 1.
punto1.cambiar(10, 7);
console.log(punto1);

// Comprobación de si dos puntos están en la misma posición.
console.log(punto1.iguales(punto2));

// Suma de dos puntos.
const punto3 = punto1.sumar(punto2);
console.log(punto3);

// Distancia entre dos puntos.
console.log(punto1.distancia(punto2));