var itensCardapio = [];

var preco;
var pizza;
var imagem;
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
    imagem.style.backgroundImage = itensCardapio[idxPizza].imagem;
}

async function enviar() {
    let endereco = document.getElementById("endereco").value;
    let quantidade = document.getElementById("qtde").value;
}

function onDeviceReady() {

    preco = document.getElementById('preco');
    pizza = document.getElementById('pizza');
    imagem = document.getElementById('imagem');

    document.getElementById('direita').addEventListener("click", direita);
    document.getElementById('esquerda').addEventListener("click", esquerda);
    document.getElementById('enviar').addEventListener("click", enviar);

    cordova.plugin.http.get("https://pedidos-pizzaria.glitch.me/pizzas",
        {},
        {},
        function (ret) {
            itensCardapio = JSON.parse(ret.data);
            atualizarTela();
        },
        function (err) {
            alert('ERRO: ' + err)
        })
}
