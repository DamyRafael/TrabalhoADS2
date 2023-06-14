let inputRaioPizza = document.querySelector ("#inputRaioPizza")
let btCalcular = document.querySelector ("#btCalcular")
let h4Resultado = document.querySelector ("#h4Resultado")

function calculaPizza (){
    let raioPizza = Number (inputRaioPizza.value)
    
    resultadoArea = 3.14 * (raioPizza**2)
    

    h4Resultado.textContent ='O resultado da área da pizza é '+resultadoArea.toFixed(2)+' metros.'
}

btCalcular.onclick = function (){
    calculaPizza ()
}

