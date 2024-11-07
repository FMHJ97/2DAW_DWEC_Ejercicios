// Para detener la propagación de eventos en bubbling, se utiliza
// el método stopPropagation() del objeto event.
// Este método detiene la propagación de eventos en bubbling, es decir, evita que
// el evento se propague a los elementos superiores en la jerarquía del DOM.
// El método stopPropagation() no tiene ningún parámetro y no devuelve ningún valor.

function inicializar(){
    var cuadroint=document.getElementById("cuadrointerno");
    var cuadromed=document.getElementById("cuadromedio");
    var cuadroext=document.getElementById("cuadroexterno");
    var fondo=document.getElementById("fondo");
    cuadroint.addEventListener("click",mostrarInterno,false);
    cuadromed.addEventListener("click",mostrarMedio,false);
    cuadroext.addEventListener("click",mostrarExterno,false);
    fondo.addEventListener("click",mostrarFondo,false);
    }
    function mostrarExterno(e){
    alert("cuadro externo");
    e.stopPropagation();
    }
    function mostrarMedio(e){
    alert("cuadro medio");
    e.stopPropagation();
    }
    function mostrarInterno(e){
    alert("cuadro interno");
    e.stopPropagation();
    }
    function mostrarFondo(e){
    alert("fondo");
    e.stopPropagation();
    }