function mostrarTriangulo(lado1, lado2, lado3) {
    // Suponemos que es un triángulo si Lado1 + Lado2
    // es mayor que Lado3.

    if(lado1 + lado2 <= lado3 || lado2 + lado3 <= lado1 || lado3 + lado1 <= lado2) {
        alert("NO es un triángulo");
    } else {
        if(lado1 === lado2 && lado2 === lado3) {
            alert("Triángulo Equilátero")
        } else if(lado1 === lado2 || lado2 === lado3 || lado3 === lado1) {
            alert("Triángulo Isósceles");
        } else {
            alert("Triángulo Escaleno");
        }
    }
    
    // Condicional Alternativo
    (lado1 + lado2 <= lado3 || lado2 + lado3 <= lado1 || lado3 + lado1 <= lado2) ? alert("NO es un triángulo") : alert("Es un triángulo");

    // alert(lado1 + lado2 + lado3);
}