let inputPeso = document.querySelector ("#inputPeso")
let btCalcular = document.querySelector ("#btCalcular")    
let h4Resultado = document.querySelector ("#h4Resultado")

function calculaPeso(){
    let peso = Number (inputPeso.value)
    let vlPeso = 12
    
    vlResultado = vlPeso * peso

    h4Resultado.textContent = 'Olá cliente, o valor do seu prato ficou em: R$'+vlResultado.toFixed(2)+''
}

btCalcular.onclick = function (){
    calculaPeso ()
}