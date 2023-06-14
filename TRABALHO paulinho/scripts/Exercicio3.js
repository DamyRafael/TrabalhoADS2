let inputPao = document.querySelector ("#inputPao");
let inputBroa = document.querySelector ("#inputBroa");
let btCalcular = document.querySelector ("#btCalcular");
let h4Resultado = document.querySelector ("#h4Resultado");

function calculaVenda (){
    let pao = Number (inputPao.value);
    let broa = Number (inputBroa.value);

    let vlPao = 0.12
    let vlBroa = 1.50

    let vlTotal = (vlPao * pao) + (vlBroa * broa)

    let percentualPoupanca = 10/100

    let vlPoupanca = vlTotal * percentualPoupanca


    resultado = ('0,12 * 100'+ 1.50)
    h4Resultado.textContent = 'O valor das vendas de hoje foi de: R$'+vlTotal+'!!!'+' E os 10% da poupaça é de: R$'+vlPoupanca.toFixed(2)+''

}

btCalcular.onclick = function (){
    calculaVenda ();
}