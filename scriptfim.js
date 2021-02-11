const resultado = document.querySelector('.resultado');
const highscore = document.querySelector('.highscore');

//VARIÁVEIS-------------------------------------------------------------------------------------------------
let tempoInicial = sessionStorage.getItem('time');
let tempoFinal = new Date().getTime();
let intervalo = tempoFinal-tempoInicial;

p = ((intervalo/1000)|0)*10;

let pontosFim = document.createElement('div');
resultado.appendChild(pontosFim);
pontosFim.classList.add('pontosFim');

pontosFim.textContent = p;

let pontosMax = document.createElement('div');
highscore.appendChild(pontosMax);
pontosMax.classList.add('pontosMax');

//FUNÇÕES----------------------------------------------------------------------------------------------------
function restart(){
    document.location.href="index.html";
}

function handleKeyDown (event) {
    const espaco = 32;
   
    if (event.keyCode === espaco){
       restart();
    }
}

function pontuacaoMax(p) {
    let pmax = localStorage.getItem('maximo');
    
    if (p>pmax || pmax == null) {
        localStorage.setItem('maximo', p);
    }
    pmax = localStorage.getItem('maximo');

    pontosMax.textContent = pmax;
}

//EXECUÇÃO---------------------------------------------------------------------------------------------------
document.addEventListener('keydown', handleKeyDown);

pontuacaoMax(p);

console.log(localStorage.getItem('maximo'));
