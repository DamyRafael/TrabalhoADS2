let inputNumero = document.querySelector ("#inputNumero")
let btCalcular = document.querySelector ("#btCalcular")
let h4Resultado = document.querySelector ("#h4Resultado")

function calculaNumero(){
    let numero = Number (inputNumero.value)
    let unidade = numero % 10
    let dezena = Math.floor ((numero % 100) / 10)
    let centena = Math.floor (numero / 100)
    
    h4Resultado.textContent ='O resultado da unidades '+unidade+'. O resultado da dezena '+dezena+'. O resultado da centena  '+centena+''
}

btCalcular.onclick = function (){
    calculaNumero()
}
