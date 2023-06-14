let inputAltura = document.querySelector ("#inputAltura")
let inputComprimento = document.querySelector ("#inputComprimento")
let btCalcular = document.querySelector ("#btCalcular")
let h4Resultado = document.querySelector ("#h4Resultado")

function calculaArea (){
    let altura = Number (inputAltura.value);
    let comprimento = Number (inputComprimento.value);
    let resultado

    resultado = (altura * comprimento)

    h4Resultado.textContent = 'A área do terreno é: '+resultado+' metros quadrados.'
}
btCalcular.onclick = function (){
    calculaArea ();
}