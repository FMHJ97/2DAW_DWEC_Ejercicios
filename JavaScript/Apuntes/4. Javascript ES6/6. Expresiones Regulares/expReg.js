// RegExp.prototype.text()
//
// El método test() ejecuta la búsqueda de una ocurrencia entre una
// expresión regular y una cadena especificada.
// Devuelve true o false.

// Con una expresión regular literal,
// consistente en un patrón encerrado entre barras. 
console.log(/^hello/.test("hello world")); // devuelve true

// Llamando a la función constructora del objeto RegExp. 
let patron = new RegExp(/^hello/);
console.log(patron.test("hello world")); // devuelve true 

// RegExp.prototype.exec()
//
// El método exec() ejecuta la búsqueda de una ocurrencia entre una
// expresión regular y una cadena especificada, pero devuelve un array
// con la coincidencia.
let coincidencias = /^hello/.exec("hello world,hello world");
console.log(coincidencias);

let patron2 = new RegExp (/^hello/);
console.log(patron2.exec("hello world")); 
