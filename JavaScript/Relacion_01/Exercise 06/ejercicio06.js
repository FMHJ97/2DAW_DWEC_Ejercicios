function mostrarTabla(num) {
    for(let i = 1; i <= 10; i++) {
        document.write(`<p>${num} x ${i} = ${num*i}</p>`);
    }
}