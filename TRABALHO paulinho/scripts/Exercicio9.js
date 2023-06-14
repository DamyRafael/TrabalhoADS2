let inputx1 = document.querySelector ("#inputx1")
let inputy1 = document.querySelector ("#inputy1")
let inputx2 = document.querySelector ("#inputx2")
let inputy2 = document.querySelector ("#inputy2")
let btCalcular = document.querySelector ("#btCalcular")
let h4Resultado  = document.querySelector ("#h4Resultado")

function calculaPonto(){
    let x1 = Number (inputx1.value)
    let y1 = Number (inputy1.value) 
    let x2 = Number (inputx2.value)
    let y2 = Number (inputy2.value)

    let ResultadoPontos = Math.sqrt ((x1-x2)**2 + (y1-y2)**2)

    h4Resultado.textContent = 'Distância dos pontos cartesianos '+ResultadoPontos.toFixed(2)+''
}

btCalcular.onclick = function (){
    calculaPonto ()
}