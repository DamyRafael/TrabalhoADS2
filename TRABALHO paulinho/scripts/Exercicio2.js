let inputCavalos = document.querySelector ("#inputCavalos");
let btCalcular = document.querySelector ("#btCalcular");
let h4Resultado = document.querySelector ("#h4Resultado");

function calculaFerraduras (){
    let cavalos = Number (inputCavalos.value); 
    let resultado

    resultado = (cavalos * 4)

    h4Resultado.textContent = 'A quantidade de ferraduras é '+resultado+' para equipar todos os cavalos.'
}

btCalcular.onclick = function (){
    calculaFerraduras ();
}