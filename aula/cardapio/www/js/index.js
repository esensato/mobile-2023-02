const itensCardapio = [{ pizza: "Calabresa", preco: "R$ 25,00", imagem: "../img/pizza.png" },
{ pizza: "Quatro Queijos", preco: "R$ 35,00", imagem: "../img/pizza.png" }];

var preco;
var pizza;
var idxPizza = 0;

document.addEventListener('deviceready', onDeviceReady, false);

function direita() {
    if (idxPizza < itensCardapio.length) {
        idxPizza++;
        atualizarTela();
    }
}

function esquerda() {
    if (idxPizza > 0) {
        idxPizza--;
        atualizarTela();
    }
}

function atualizarTela() {
    pizza.innerHTML = itensCardapio[idxPizza].pizza;
    preco.innerHTML = itensCardapio[idxPizza].preco;
}

function enviar() {
    let endereco = document.getElementById("endereco").value;
    let quantidade = document.getElementById("qtde").value;

    alert(endereco + ", " + quantidade);
}

function onDeviceReady() {

    preco = document.getElementById('preco');
    pizza = document.getElementById('pizza');

    atualizarTela();

    document.getElementById('direita').addEventListener("click", direita);
    document.getElementById('esquerda').addEventListener("click", esquerda);
    document.getElementById('enviar').addEventListener("click", enviar);
}
