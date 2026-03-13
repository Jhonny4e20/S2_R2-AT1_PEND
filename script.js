const input = document.getElementById("nomeInput");
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function(){

    const nome = input.value;

    mensagem.textContent = "Olá, " + nome + "! Seja bem-vindo(a).";

});