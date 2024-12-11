// Clase Planta.
class Planta {
    // Contructor.
    constructor(nombre,tipo,riego) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.riego = riego;
    }
    // Método.
    informacion() {
        console.log(`Planta => Nombre: ${this.nombre}, Tipo: ${this.tipo}, Riego: ${this.riego}`);
    }
}

// Clase Arbusto.
class Arbusto extends Planta {
    // Constructor.
    constructor(nombre,tipo,riego,altura) {
        super(nombre,tipo,riego);
        this.altura = altura;
    }
    // Método.
    informacion() {
        console.log(`Arbusto => Nombre: ${this.nombre}, Tipo: ${this.tipo}, Riego: ${this.riego}, Altura: ${this.altura}`);
    }
}

// Clase Arbusto.
class Arbol extends Planta {
    // Constructor.
    constructor(nombre,tipo,riego,edad) {
        super(nombre,tipo,riego);
        this.edad = edad;
    }
    // Método.
    informacion() {
        console.log(`Árbol => Nombre: ${this.nombre}, Tipo: ${this.tipo}, Riego: ${this.riego}, Edad: ${this.edad}`);
    }
}

// Pruebas.
const planta1 = new Planta("Perejil","Comestible","Minimo");
planta1.informacion();

const arbusto1 = new Arbusto("Verdoso","Silvestre","Mucho",50);
arbusto1.informacion();

const arbol1 = new Arbol("Pino","Silvestre","Normal",32);
arbol1.informacion();