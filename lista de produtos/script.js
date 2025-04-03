function adicionarItem() {
    let input = document.getElementById("itemInput");
    let lista = document.getElementById("lista");
    if (input.value.trim() !== "") {
        let li = document.createElement("li");
        li.innerText = input.value;
        let botaoExcluir = document.createElement("button");
        botaoExcluir.innerText = "X";
        botaoExcluir.classList.add("delete-btn");
        botaoExcluir.onclick = function () {
            lista.removeChild(li);
        };
        li.appendChild(botaoExcluir);
        lista.appendChild(li);
        input.value = "";
    }
 }