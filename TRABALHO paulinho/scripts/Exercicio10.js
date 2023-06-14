let inputDiaSemAcidentes = document.querySelector ("#inputDiaSemAcidentes")
let btCalcular = document.querySelector ("#btCalcular")
let h4Resultado = document.querySelector ("#h4Resultado")

function calculaAcidente (){
    let diaSemAcidente = Number (inputDiaSemAcidentes.value)

    mesesSemAcidente = diaSemAcidente / 30
    anoSemAcidente = diaSemAcidente / 365

    h4Resultado.textContent ='Parabéns. '+diaSemAcidente+' dias sem acidentes na empresa. '+mesesSemAcidente.toFixed(2)+' meses sem acidentes na empresa. '+anoSemAcidente.toFixed(2)+' anos sem acidentes na empresa'
}

btCalcular.onclick = function (){
    calculaAcidente()
}