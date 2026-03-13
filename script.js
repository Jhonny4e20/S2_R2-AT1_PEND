const input = document.getElementById("inputTarefa");
const botao = document.getElementById("btnAdicionar");
const mensagem = document.getElementById("mensagem");
const lista = document.getElementById("listaTarefas");

botao.addEventListener("click", function(){

    const texto = input.value.trim();

    if(texto === ""){
        
        mensagem.textContent = "Tarefa vazia!";
        mensagem.className = "text-danger fw-bold";

        return;
    }

    const novaTarefa = document.createElement("li");

    novaTarefa.textContent = texto;

    novaTarefa.className = "list-group-item";

    lista.appendChild(novaTarefa);

    input.value = "";

    mensagem.textContent = "Tarefa adicionada com sucesso!";
    mensagem.className = "text-success fw-bold";

});