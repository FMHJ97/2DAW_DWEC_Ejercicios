/* 
Es la forma idónea de trabajar con eventos.

Consiste en aplicar un único evento al elementos superior (document) y
posteriormente ir detectando qué elemento ( o mejor dicho detectamos con el
método matches qué selector) ha provocado ese evento.

De esta forma, evitamos tener varios elementos a los que se le aplica el mismo
evento y además evitamos la propagación de eventos.
*/

function inicializar() {
  document.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.matches("#cuadrointerno")) mostrarInterno();
    if (e.target.matches("#cuadromedio")) mostrarMedio();
    if (e.target.matches(".cuadroexterno")) mostrarExterno();
    if (e.target.matches(".fondo")) mostrarFondo();
  });
}
function mostrarExterno(e) {
  alert("cuadro externo");
}
function mostrarMedio(e) {
  alert("cuadro medio");
}
function mostrarInterno(e) {
  alert("cuadro interno");
}
function mostrarFondo(e) {
  alert("fondo");
}
