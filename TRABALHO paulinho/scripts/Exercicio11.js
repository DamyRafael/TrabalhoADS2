let inputSalarioFuncionario = document.querySelector ("#inputSalarioFuncionario")
let btCalcular = document.querySelector ("#btCalcular")
let h4Resultado = document.querySelector ("#h4Resultado")

function calculaAumento (){
    let salarioFuncionario = Number (inputSalarioFuncionario.value)

    aumentoSalarial = ((15/100) * salarioFuncionario) + salarioFuncionario

    descontoFolha = (8/100) * aumentoSalarial

    salarioLiquido = aumentoSalarial - descontoFolha

    h4Resultado.textContent = 'Este era seu salário inicial R$'+salarioFuncionario.toFixed(2)+'. Este é o seu salario com aumento R$'+aumentoSalarial.toFixed(2)+'. Este é o seu salario liquido com desconto de 8% de imposto R$'+salarioLiquido.toFixed(2)+'.'
} 

btCalcular.onclick = function (){
    calculaAumento()
}