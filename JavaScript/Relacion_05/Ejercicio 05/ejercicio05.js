function changeAll() {
    let parrafos = document.querySelectorAll('p');
    resetAll();
    parrafos.forEach(parrafo => {
        parrafo.className="rojo";
    });
}

function changeFirst() {
    let parrafos = document.querySelectorAll('p');
    resetAll();
    for (let i = 0; i < parrafos.length; i++) {
        if(i==0) parrafos[i].className="rojo";
        else parrafos[i].className="negro";
    }
}

function changeEvens() {
    let parrafos = document.querySelectorAll('p');
    resetAll();
    for (let i = 0; i < parrafos.length; i++) {
        if(i%2==0) parrafos[i+1].className="rojo";
        else parrafos[i+1].className="negro";
    }
}

function changeOdds() {
    let parrafos = document.querySelectorAll('p');
    resetAll();
    for (let i = 0; i < parrafos.length; i++) {
        if(i%2==0) parrafos[i].className="rojo";
        else parrafos[i].className="negro";
    }
}

function addParrafo() {
    let parrafos = document.querySelectorAll('p');
    resetAll();
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
    let parrafos = document.querySelectorAll('p');
    parrafos.forEach(parrafo => {
        parrafo.className="negro";
    });
}