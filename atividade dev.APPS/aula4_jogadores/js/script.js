
const image = document.querySelector('#imagens')
const haaland = document.querySelector('#haaland')
const cr7 = document.querySelector('#cr7')
const mbappe = document.querySelector('#mbappe')
const neymar = document.querySelector('#neymar')
const dybala = document.querySelector('#dybala')
const messi = document.querySelector('#messi')


haaland.addEventListener('click',jogador1)
cr7.addEventListener('click',jogador2)
mbappe.addEventListener('click',jogador3)
neymar.addEventListener('click',jogador4)
dybala.addEventListener('click',jogador5)
messi.addEventListener('click',jogador6)

function jogador1(){
    image.src = "images/haaland.webp"
}
function jogador2(){
    image.src = "images/cr7.jpg"
}
function jogador3(){
    image.src = "images/mbappe.webp"
}
function jogador4(){
    image.src = "images/neymar.webp"
}
function jogador5(){
    image.src = "images/dybala.webp"
}
function jogador6(){
    image.src = "images/messi.jpg"
}