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
    novaTarefa.className = "list-group-item d-flex justify-content-between align-items-center";

    const span = document.createElement("span");
    span.textContent = texto;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.className = "btn btn-danger btn-sm";

    botaoRemover.addEventListener("click", function(){
        novaTarefa.remove();
    });

    novaTarefa.appendChild(span);
    novaTarefa.appendChild(botaoRemover);

    lista.appendChild(novaTarefa);

    input.value = "";

    mensagem.textContent = "Tarefa adicionada com sucesso!";
    mensagem.className = "text-success fw-bold";

});