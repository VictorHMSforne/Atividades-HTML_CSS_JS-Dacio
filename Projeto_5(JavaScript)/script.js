const img = document.getElementById("main");
const bnt = document.getElementById("btn");
const tgl = document.getElementById("tgl")

const estados = {
    normal: "Panda_IA.png",
    comendo: "PandaComendo_IA.png",
    triste: "PandaTriste_IA.png",
    bravo: "PandaFaminto_IA.png",
    alimentado: "PandaAlimentado_IA.png",
    obesoTriste: "PandaGordoTriste_IA.png",
}

let contador = 0;
let intervalo = null;
let timeClick = null;
let timeOut = null;
let fundoDia = "FlorestaDia.png";
let fundoNoite = "FlorestaNoite.png"
let horas = 0;
let jahComeu = 0;

function controlador(){
    if(intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {

        contador++

        console.log("Tempo: ", contador);
        
        if(contador == 30 && jahComeu == 1){
            img.src = estados.obesoTriste
        }else if(contador == 30){
            img.src = estados.triste
        }
        if(contador == 60){
            img.src = estados.bravo
        }

    },1000)
    
};

function alimentar(){
    img.src= estados.comendo;
    contador = 0;
    jahComeu = 1;
    console.log("Comendo");

    if(timeClick) clearInterval(timeClick) // Verifica se existe algum dado. Se tiver, zera os dados

        timeClick = setTimeout(() => {
            img.src = estados.alimentado;

            timeOut = setTimeout (() =>{
                img.src = estados.normal;
            },2000);
        },1000);

};

function atualizarFundo(){
    if (tgl.checked) {
        document.body.classList.add('dark-mode');
        document.body.style.backgroundImage = `url('${fundoNoite}')`;  
    } else {
        document.body.classList.remove('dark-mode');
        document.body.style.backgroundImage = `url('${fundoDia}')`; 
    }

};

controlador();