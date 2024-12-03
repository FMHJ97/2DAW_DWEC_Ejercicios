class Fraccion {
    // Constructor.
    constructor(numerador, denominador) {
        this.numerador = numerador;
        this.denominador = denominador;
    }

    // Función que devuelve el MCD de dos números.
    mcd(a, b) {
        let resto = 0;
        while (a % b != 0) {
            resto = a % b;
            a = b;
            b = resto;
        }
        return b;
    }

    // Métodos getter y setter.
    getNumerador() {
        return this.numerador;
    }
    setNumerador(numerador) {
        this.numerador = numerador;
    }

    getDenominador() {
        return this.denominador;
    }
    setDenominador(denominador) {
        this.denominador = denominador;
    }

    // Método para imprimir la fracción.
    imprimirFraccion() {
        return `Fracción: ${this.numerador}/${this.denominador}`;
    }

    // Método que devolverá la fracción simplificada,
    // sabiendo que ésta resulta de dividir el numerador y 
    // el denominador por el máximo común divisor entre ellos.
    simplificar() {
        // Calculamos el máximo común divisor.
        const mcd = this.mcd(this.numerador, this.denominador);
        // Simplificamos la fracción.
        this.numerador /= mcd;
        this.denominador /= mcd;
        // Devolvemos la fracción simplificada.
        return this;
    }

    // Método que que permita multiplicar dos fracciones, sabiendo que el resultado
    // es la multiplicación de los numeradores dividido por la multiplicación de los
    // denominadores. Hay que devolver la fracción simplificada.
    multiplicarF(fraccion) {
        // Multiplicamos los numeradores y los denominadores de las fracciones.
        // Para ello, multiplicamos los numeradores y los denominadores de las fracciones.
        const numerador = this.numerador * fraccion.getNumerador();
        const denominador = this.denominador * fraccion.getDenominador();

        return new Fraccion(numerador, denominador).simplificar();
    }

    // Método que permita dividir dos fracciones, sabiendo que el numerador resultante
    // es la multiplicación del numerador de la primera por el denominador de la segunda
    // y que el denominador resultante es la multiplicación del denominador de la primera
    // por el numerador de la segunda. Hay que dar la fracción simplificada.
    dividirF(fraccion) {
        // Multiplicamos los numeradores y los denominadores de las fracciones.
        // Para ello, multiplicamos el numerador de la primera fracción por el
        // denominador de la segunda y el denominador de la primera fracción
        // por el numerador de la segunda.
        const numerador = this.numerador * fraccion.getDenominador();
        const denominador = this.denominador * fraccion.getNumerador();
        return new Fraccion(numerador, denominador).simplificar();
    }
}

// Creamos dos fracciones.
const fraccion1 = new Fraccion(5, 10);
const fraccion2 = new Fraccion(3, 6);

// Imprimimos las fracciones.
console.log(`Fracción 1: ${fraccion1.imprimirFraccion()}`);
console.log(`Fracción 2: ${fraccion2.imprimirFraccion()}`);

// Multiplicamos las fracciones.
const fraccionMultiplicada = fraccion1.multiplicarF(fraccion2);
console.log(`Fracción Multiplicación: ${fraccionMultiplicada.imprimirFraccion()}`);

// Dividimos las fracciones.
const fraccionDividida = fraccion1.dividirF(fraccion2);
console.log(`Fracción División: ${fraccionDividida.imprimirFraccion()}`);