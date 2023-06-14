let inputDia = document.querySelector ("#inputDia")
let inputMes = document.querySelector ("#inputMes")
let btCalcular = document.querySelector ("#btCalcular")
let h4Resultado = document.querySelector ("#h4Resultado")

function calculaDia (){
    let dia = Number (inputDia.value)
    let mes = Number (inputMes.value)

    resultadoDias = (mes - 1) *30 + dia

    h4Resultado.textContent ='Olá, do começo de ano até hoje ja se foram '+resultadoDias+' dias.'
}

btCalcular.onclick = function (){
    calculaDia ()
}