const img = document.getElementById("main");
const bnt = document.getElementById("btn");

const estados = {
    normal: "Panda_IA.png",
    comendo: "PandaComendo_IA.png",
    triste: "PandaTriste_IA.png",
    feliz: "PandaRadical_IA.png",
    
}

let contador = 0;
let intervalo = null;
let timeClick = null;
let timeOut = null;

function initConta(){
    if(intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {

        contador++

        console.log("Tempo: ", contador);
        if(contador == 30){
            img.src = estados.triste
        }
        if(contador == 60){
            img.src = estados.feliz
        }

    },1000)
    
};