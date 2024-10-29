var d = document;
var enlaces = d.querySelectorAll('a');

// Apartado a
console.log("Enlaces", enlaces.length);

// Apartado b
console.log(enlaces[enlaces.length - 2].href);
//console.log(enlaces[enlaces.length - 2].getAttribute('href'));

// Apartado c
var contador=0;
enlaces.forEach(element => {
    if (element.href == "http://www.marca.es/") contador++;
});
console.log("Nº enlaces a Marca: ", contador);

// Apartado d
// Accede al tercer párrafo.
var tercerParrafo = d.querySelectorAll('p')[2];
var numEnlaces = tercerParrafo.querySelectorAll('a');
console.log("Nº enlaces en tercer párrafo: ", numEnlaces.length);
// console.log(d.querySelectorAll('p')[2].querySelectorAll('a').length);
