let inputTotal = document.querySelector ("#inputTotal");
let btCalcular = document.querySelector ("#btCalcular");
let inputPreco = document.querySelector ("#inputPreco");
let h4Resultado = document.querySelector ("#h4Resultado");


function calculaLitros (){
    let total = Number (inputTotal.value);
    let preco = Number (inputPreco.value);

    quantidadeLitros = total / preco

    h4Resultado.textContent ='Você abasteceu '+quantidadeLitros.toFixed(2)+' litros de gasolina.'

}

btCalcular.onclick = function (){
    calculaLitros ()
}