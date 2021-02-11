const dino = document.querySelector('.dino');
const background = document.querySelector('.fundo');
const placar = document.querySelector('.placar');

//VARIÁVEIS--------------------------------------------------------------------------------------------------------
//variável para ver se já está pulando e evitar bug (pular já pulando)
let isJumping = false;

let position = 0;

let pontos = document.createElement('div');
placar.appendChild(pontos);
pontos.classList.add('pontos');

let p = 0;
pontos.textContent = p;



//FUNÇÕES----------------------------------------------------------------------------------------------------------
// quando apertar a tecla e soltar (ver se tem um que identifica no apertar)
function handleKeyDown (event) {
    const espaco = 32;
    const cima = 38;    
    const baixo = 40;


    if (event.keyCode === espaco || event.keyCode === cima){
        //Verificar se já está pulando, no caso de false, ele pula
        if (!isJumping){
            pular();
            console.log("pular");
        }
    }
}

function pular () {
    isJumping = true;

    //O código vai ser executado a cada 20 ms - EXECUTAR UM CÓDIGO DE MANEIRA REPETIDA
    let upInterval = setInterval( () => {
        if (position >= 150) {
            //Para de fazer a ação, nesse caso, para de subir
            clearInterval(upInterval) 

            //Descendo
            let downInterval = setInterval(()=>{
                if (position <=0){
                    isJumping = false;
                    //Para de descer
                    clearInterval(downInterval); 
                }else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);    

        }else{
            //Subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

function criarCacto () {
    const cacto = document.createElement('div');
    let cactoPosition = 900;
    let tempoAleatorio = Math.random() * 1000 +500;

    cacto.classList.add('cacto');
    cacto.style.left = cactoPosition + 'px';
    background.appendChild(cacto);

    let lefInterval = setInterval( (event) => {
        if (cactoPosition <= -60){
            clearInterval(lefInterval);
            background.removeChild(cacto);
            
        }else if (cactoPosition>0 && cactoPosition<60 && position<60){
            clearInterval(lefInterval);
            window.location.href="fimdejogo.html"

        }else {
            cactoPosition -= 10;
            cacto.style.left = cactoPosition + 'px';
        }

    }, 20);

    setTimeout(criarCacto, tempoAleatorio);
}

function pontuacaoAoVivo (){
   
    let tempo = setInterval( () =>{
        p += 10;
        pontos.textContent = p;
    }, 1000);

    return p;
}


//EXECUÇÃO--------------------------------------------------------------------------------------------------
criarCacto();

let result = pontuacaoAoVivo ();

document.addEventListener('keydown', handleKeyDown);

const time = new Date().getTime();
sessionStorage.setItem('time', time);
