let inputValorTotal = document.querySelector ("#inputValorTotal")
let btCalcular = document.querySelector ("#btCalcular")
let h4Resultado = document.querySelector ("#h4Resultado")

function calculaBar(){
    let valorTotal = Number (inputValorTotal.value)

    valorAndre = Math.floor (valorTotal / 3)
    valorCarlos = Math.floor (valorTotal / 3)
    valorFelipe = valorTotal - (valorAndre + valorCarlos)

    h4Resultado.textContent ='Valor total da conta R$'+valorTotal+'. Parte do Andre R$'+valorAndre+'. Parte do Carlos R$'+valorCarlos+'. Parte do Felipe R$'+valorFelipe.toFixed(2)+'.'
}

btCalcular.onclick = function (){
    calculaBar()
}
