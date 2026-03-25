const img = document.getElementById("main");
const bnt = document.getElementById("btn");

const estados = {
    normal: "Panda_IA.png",
    comendo: "PandaComendo_IA.png",
    triste: "PandaGordoTriste_IA.png",
    feliz: "PandaRadical_IA.png",
    alimentado: "PandaAlimentado_IA.png",
}

let contador = 0;
let intervalo = null;
let timeClick = null;
let timeOut = null;

function controlador(){
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

function alimentar(){
    img.src= estados.comendo;
    contador = 0;
    console.log("Comendo");

    if(timeClick) clearInterval(timeClick) // Verifica se existe algum dado. Se tiver, zera os dados

        timeClick = setTimeout(() => {
            img.src = estados.alimentado;

            timeOut = setTimeout (() =>{
                img.src = estados.normal;
            },2000);
        },1000);

};

controlador();