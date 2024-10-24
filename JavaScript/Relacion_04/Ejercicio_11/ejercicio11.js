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