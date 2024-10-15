/*
Son dos sentencias javascript que van a permitir realizar una función
callback cada cierto tiempo: SetTimeout y SetInterval. La única
diferencia es que SetTimeout se ejecuta una sola vez con el tiempo
estimado y SetInterval se ejecuta indefinidamente cada vez con el
tiempo estimado.
    setTimeout(()=>{},tiempo en milisegundos);
    setInterval(()=>{}, tiempo en milisegundos);

Además, hay dos sentencias que sirven para detener a los
temporizadores, clearTimeOut y clearInterval.
    clearTimeOut(temporizador);
    clearInterval(temporizador);
*/

setTimeout(()=>{console.log("Esto se ejecuta una sola vez a los 3 segundos");},3000);
setInterval(()=>{console.log("Esto se ejecuta indefinidamente cada segundo");},1000);

var temporizador1 = setTimeout(()=>{document.write("Esto se ejecuta una sola vez a los 3 segundos"+"<br>");},3000);
var temporizador2 = setInterval(()=>{document.write("Esto se ejecuta indefinidamente cada segundo"+"<br>");},1000);

clearTimeout(temporizador1);
clearInterval(temporizador2);