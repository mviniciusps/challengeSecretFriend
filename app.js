//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Declarar variavel no escopo global
var nomes = [];

//Recupera os nomes digitados e insere em um array
function adicionarAmigo() {
    let nomeDigitado = document.getElementById("amigo").value;

    if (nomeDigitado !== "") {

        nomes.push(nomeDigitado);
        document.getElementById("amigo").value = "";

    } else {

        alert("Digite um nome válido");
    }
    //console.log(nomes);
}

//Mostra o nome sorteado
function sortearAmigo() {
    console.log(nomes);
    let prontoParaSortear = parseInt(nomes.length);
    let = nomeSorteado = Math.floor(Math.random() * prontoParaSortear);
    //console.log(nomes[nomeSorteado]);
    document.querySelector('h2').innerHTML = `Vencedor(a): ${nomes[nomeSorteado]}`;
}