let inputP = document.querySelector ("#inputP")
let inputM = document.querySelector ("#inputM")
let inputG = document.querySelector ("#inputG")
let btCalcular = document.querySelector ("#btCalcular")
let h4Resultado = document.querySelector ("#h4Resultado")

function calculaVenda (){
    let P = Number (inputP.value)
    let M = Number (inputM.value)
    let G = Number (inputG.value)
    let PrecoP = 10
    let PrecoM = 12
    let PrecoG = 15

    resultadoCalculo = (P * PrecoP) + (M * PrecoM) + (G * PrecoG)

    h4Resultado.textContent ='Valor total R$'+resultadoCalculo+' reais. '+P+' camiseta P foram compradas. '+M+' camiseta M foram compradas. '+G+' camiseta G foram compradas.'
}

btCalcular.onclick = function (){
    calculaVenda ()
}
