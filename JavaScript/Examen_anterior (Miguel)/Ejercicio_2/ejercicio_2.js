// 2. Objeto "Carta" de la baraja de póker (1,5 puntos)

class Carta {
    constructor(palo, valor) {
      this.palo = palo; // 1->corazones, 2->diamantes, 3->picas, 4->tréboles
      this.valor = valor; // 1->as, 2->2, ..., 10->10, 11->J, 12->Q, 13->K
    }
  
    nombreCarta() {
      const palos = ['corazones', 'diamantes', 'picas', 'tréboles'];
      const valores = ['as', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
      return `${valores[this.valor - 1]} de ${palos[this.palo - 1]}`;
    }
  }
  
  // Ejemplos:
  const carta1 = new Carta(1, 1); // As de corazones
  console.log(carta1.nombreCarta()); // "as de corazones"
  
  const carta2 = new Carta(2, 13); // Rey de diamantes
  console.log(carta2.nombreCarta()); // "K de diamantes"
  