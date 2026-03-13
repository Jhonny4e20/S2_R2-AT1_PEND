const input = document.getElementById("itemInput");
const botao = document.getElementById("botaoAdicionar");
const lista = document.getElementById("lista");

botao.addEventListener("click", function(){

    const textoItem = input.value;

    const novoItem = document.createElement("li");

    novoItem.textContent = textoItem;

    lista.appendChild(novoItem);

    input.value = "";

});