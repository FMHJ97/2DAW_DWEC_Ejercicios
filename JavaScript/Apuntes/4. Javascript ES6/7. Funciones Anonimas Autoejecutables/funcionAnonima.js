// Las funciones anónimas autoejecutables son aquellas que se
// ejecutan nada más definirse.

// Sintaxis: (function () { Sentencias})();
// Consta de dos partes bien diferenciadas:
// - La primera es la función anónima
// - La segunda parte crea la expresión de función cuya ejecución es
//   autoejecutable (), siendo interpretado directamente por el motor de
//   javascript

(function(){
    console.log("Ejecutado directamente en la primera función autoejecutable");
    document.write("Ejecutado directamente en la primera función autoejecutable"+"<br>")
})();

var funcionAnonimaAutoejecutable = (function () {
    console.log("Ejecutado directamente en la segunda función autoejecutable");
    document.write("Ejecutado directamente en la segunda función autoejecutable");
    
    var a=3;
    return a;
})();

//console.log(a); //a no está definida
console.log(funcionAnonimaAutoejecutable)
    
    