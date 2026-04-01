const produto = {
    "123" : {"nome" : "Coca-Cola Espumante", "preco" : 9.99},
    "456" : {"nome" : "Um Mamute Pequenino", "preco" : 8.99},
    "789" : {"nome" : "Vampiro Doidão",      "preco" : 4.69}
};

let carrinho = [];

const  audio = new Audio("bip.mp3");

window.onload = () =>{  // Uma função que ao carregar a página ela coloca o foco no input cod
    document.getElementById("cod").focus();
}

function addProduto(){
    const codValue = document.getElementById("cod");
    const qtdValue = document.getElementById("qtd");

    const codigo = codValue.value;
    const quantidade = qtdValue.value;

    if (!produto[codigo]) {
        AlertItem();
        return;
    } 

    const produtoBase = produto[codigo];
    const item = {
        nome:   produtoBase.nome, 
        preco:  produtoBase.preco,
        quantidade: quantidade,
        subtotal: produtoBase.preco * quantidade
    };

    carrinho.push(item);
    audio.currentTimte = 0;
    audio.play();

    atualizarTela();
}

function atualizarTela(){
    const lista = getElementById("lista");

    lista.innerHTML = "";

    let total = 0;
    
}