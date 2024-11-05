var parrafos = document.querySelectorAll('p');

function changeAll() {
    parrafos.forEach(parrafo => {
        parrafo.className="rojo";
    });
}

function changeFirst() {
    for (let i = 0; i < parrafos.length; i++) {
        if(i==0) parrafos[i].className="rojo";
        else parrafos[i].className="negro";
    }
}

function changeEvens() {
    for (let i = 0; i < parrafos.length; i++) {
        if(i%2==0) parrafos[i+1].className="rojo";
        else parrafos[i+1].className="negro";
    }
}

function changeOdds() {
    for (let i = 0; i < parrafos.length; i++) {
        if(i%2==0) parrafos[i].className="rojo";
        else parrafos[i].className="negro";
    }
}

function addParrafo() {
    if(parrafos.length >= 2) {
        // Creamos un nodo párrafo.
        var nodoParrafo = document.createElement("p");
        var textoParrafo = document.createTextNode("Soy un párrafo insertado!");
        // Agregamos el contenido al nodoParrafo.
        nodoParrafo.appendChild(textoParrafo);
        parrafos[1].appendChild(nodoParrafo);
    }
}

function resetAll() {
    parrafos.forEach(parrafo => {
        parrafo.className="negro";
    });
}