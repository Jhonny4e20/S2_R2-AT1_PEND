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

    const container = document.createElement("div");
    container.className = "d-flex align-items-center gap-2";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input";

    const span = document.createElement("span");
    span.textContent = texto;

    checkbox.addEventListener("change", function(){

        if(checkbox.checked){
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
        }else{
            span.style.textDecoration = "none";
            span.style.color = "black";
            
        }

    });

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.className = "btn btn-danger btn-sm";

    botaoRemover.addEventListener("click", function(){
        novaTarefa.remove();
    });

    container.appendChild(checkbox);
    container.appendChild(span);

    novaTarefa.appendChild(container);
    novaTarefa.appendChild(botaoRemover);

    lista.appendChild(novaTarefa);

    input.value = "";

    mensagem.textContent = "Tarefa adicionada com sucesso!";
    mensagem.className = "text-success fw-bold";

});