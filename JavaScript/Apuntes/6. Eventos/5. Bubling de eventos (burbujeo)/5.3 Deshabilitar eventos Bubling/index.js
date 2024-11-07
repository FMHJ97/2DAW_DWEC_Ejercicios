// Vamos a ver cómo detener el bubling, para que solo se ejecute una vez
// el onclick, y se desactive en todos los elementos del bubling.
//
// En este caso vamos a utilizar como parámetro, un objeto con dos variables
// predefinidas capture y once (por defecto false, true para desactivar), para elegir
// el método de propagación y desactivar los eventos respectivamente.
//
// Todos funcionarán en modo burbuja, pero una vez hecho click en
// cualquiera de ellos se deshabilita el evento onclick.
cuadroint.addEventListener("click",mostrarInterno,{capture:false,once:true});
cuadromed.addEventListener("click",mostrarMedio,{capture:false,once:true});
cuadroext.addEventListener("click",mostrarExterno,{capture:false,once:true});
fondo.addEventListener("click",mostrarFondo,{capture:false,once:true});
