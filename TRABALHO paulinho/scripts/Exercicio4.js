let inputNome = document.querySelector ("#inputNome");
let inputIdade = document.querySelector ("#inputIdade");
let btCalcular = document.querySelector ("#btCalcular");
let h4Resultado = document.querySelector ("#h4Resultado");

function calculaDias (){
    let Nome = String (inputNome.value);
    let Idade = Number (inputIdade.value);

    let vlDiasVividos = 365;
    let = Nome;
   
    resultado = Idade * 365;
    h4Resultado.textContent ='Ola '+Nome+', você viveu '+resultado+' dias de vida.'

}
 
btCalcular.onclick = function (){
    calculaDias ();
}