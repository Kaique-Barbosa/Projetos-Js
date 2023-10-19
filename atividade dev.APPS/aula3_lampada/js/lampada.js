// DOM - 1º PARTE DO CÓDIGO
const lampada = document.querySelector('#lampada')
const btLigar = document.querySelector('#ligar')
const btDesligar = document.querySelector('#desligar')

// EVENTO 2º PARTE

btLigar.addEventListener('click',acender)
btDesligar.addEventListener('click',apagar)
lampada.addEventListener('dblclick',quebrar)
lampada.addEventListener('mouseover',passar)


// função 3º etapa - e ultima


function acender(){
    lampada.src = "images/acesa.gif"
}
function apagar(){
    lampada.src = "images/apagada.gif"
}
function quebrar(){
    lampada.src = "images/quebrada.jpg"
}



  
       
