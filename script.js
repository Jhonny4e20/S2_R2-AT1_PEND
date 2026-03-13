

const texto = document.getElementById("texto");
const botaoMudar = document.getElementById("botaoMudar");
const botaoResetar = document.getElementById("botaoResetar");

botaoMudar.addEventListener("click", function(){

    texto.textContent = "Texto alterado com a ✨Magia✨ da Programação🫴💫";

});

botaoResetar.addEventListener("click", function(){

    texto.textContent = "Clique no botão para mudar este texto.";

});