// Creamos la clase habitación.
class Habitacion {
    // Constructor.
    constructor(numero,capacidad,servicios) {
        this.numero=numero;
        this.capacidad=capacidad;
        this.servicios=servicios;
    }
    // Métodos.
    calcularPrecio() {
        return (this.capacidad * 24) + (this.servicios * 3);
    }
}

// Creamos la clase HabitacionHotel que hereda de Habitacion.
class HabitacionHotel extends Habitacion {
    // Constructor.
    constructor(numero,capacidad,servicios,director,categoria,numHabsEstandar,numHabsSuite) {
        // Atributos clase padre.
        super(numero,capacidad,servicios);
        // Atributos clase heredada.
        this.director=director;
        this.categoria=categoria; // Estrellas.
        this.numHabsEstandar=numHabsEstandar;
        this.numHabsSuite=numHabsSuite;
    }
    // Métodos.
    calcularPrecio() {
        let incremento = (this.categoria - 1) * 0.05; // 5% por estrella.
        return super.calcularPrecio() * (incremento + 1); // Precio base con el incremento.
    }
    calcularRecaudacionHotel() {
        // Necesitamos tener cada habitación con su respectiva capacidad y servicios.
        // El número de habitación no importa para calcular el precio de estas habitaciones.
        let habEstandar = new Habitacion(1,2,2); // 2 personas y 2 servicios.
        let habSuite = new Habitacion(1,2,5); // 2 personas y 5 servicios.

        // Calculamos el precio base para cada habitación.
        let precioHabEstandar = habEstandar.calcularPrecio() * (((this.categoria - 1) * 0.05) + 1);
        let precioHabSuite = habSuite.calcularPrecio() * (((this.categoria - 1) * 0.05) + 1);

        // A continuación, calculamos la cantidad recaudada para cada habitación
        // según la cantidad de habitaciones existentes.
        // Por último, devolvemos la suma de ambas recaudaciones.
        return (this.numHabsEstandar * precioHabEstandar) + (this.numHabsSuite * precioHabSuite);
    }
}
// Objeto de la clase HabitacionHotel.
const habHotel = new HabitacionHotel(11,4,2,"Pepe",4,20,5);
// Mostramos el objeto creado.
console.log(habHotel);
console.log(`Precio habitación actual en hotel: ${habHotel.calcularPrecio()}€`);
console.log(`Recaudación total del hotel (habs ocupadas): ${habHotel.calcularRecaudacionHotel()}€`);