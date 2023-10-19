//dom
const hora = document.querySelector('#hora')
const minuto = document.querySelector('#minuto')
const segundo = document.querySelector('#segundo')

const dia = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')

const icon = document.querySelector('#tempo-icon')

const text_icon = document.querySelector('#text-dia-noite')
const backgound = document.body.classList

//evento

setInterval(relogio, 1000)
setInterval(data, 1000)

// função

function relogio(){

    let hoje = new Date()

    let hr = hoje.getHours()
    let min = hoje.getMinutes()
    let seg = hoje.getSeconds()

   
    // if(hr == 11 && min >= 59){
    //     

    // }

    if(hr<10){
        hr = "0"+hr
    }
    if(min<10){
        min = "0"+min
    }
    if(seg<10){
        seg = "0"+seg
    }

    hora.textContent=hr
    minuto.textContent=min
    segundo.textContent=seg

    //hr = 10

    if(hr > 4 && hr < 12){
        icon.src = "images/sol.png"
        text_icon.textContent = "BOM DIA"
        backgound.remove("body_noite")
    } else if(hr >= 12 && hr <= 17){
        icon.src = "images/sol.png"
        text_icon.textContent = "BOA TADE"
        backgound.remove("body_noite")
    } else{
        icon.src = "images/lua.png"
        text_icon.textContent = "BOA NOITE"
        backgound.add("body_noite")
    }


}

function data(){

    let hoje = new Date()

    let dataDia = hoje.getDate() 
    let dataMes = hoje.getMonth() +1 // adicionei o +1
    let dataAno = hoje.getFullYear()

    if (dataDia < 10) {
        dataDia = "0" + dataDia
    }
    if (dataMes < 10  ) {
        dataMes = "0" + dataMes
    }
  
    dia.textContent = dataDia
    mes.textContent = dataMes
    ano.textContent = dataAno
}







