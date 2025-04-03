let valorAtual = 0;

document.getElementById("adicionar").addEventListener("click", function() {
    valorAtual++;
    document.getElementById("valor").innerText = valorAtual;
});

document.getElementById("subtrair").addEventListener("click", function() {
    if (valorAtual > 0) {  
        valorAtual--;
        document.getElementById("valor").innerText = valorAtual;
    }
});