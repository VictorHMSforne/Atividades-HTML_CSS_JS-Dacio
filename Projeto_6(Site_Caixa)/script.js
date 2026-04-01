const produto = {
    "123" : {"nome" : "Coca-Cola Espumante", "preco" : 9.99},
    "456" : {"nome" : "Um Mamute Pequenino", "preco" : 8.99},
    "789" : {"nome" : "Vampiro Doidão",      "preco" : 4.69}
};

let carrinho = [];

const  audio = new Audio("bip.mp3");

window.onload = () =>{
    document.getElementById("cod").focus();
}