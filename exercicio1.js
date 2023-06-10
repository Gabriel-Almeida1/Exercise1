var nome = prompt("Digite seu nome: ")
var idade = prompt("Digite sua idade: ")
var AnoNascimento = 2023 - idade
var IdadeParOuImpar = ""
var AnoParOuImpar = ""

if (idade % 2 ==0) {
    IdadeParOuImpar = "Par"
} else {
    IdadeParOuImpar = "Impar"
}

if (AnoNascimento % 2 ==0) {
    AnoParOuImpar = "Par"
} else {
    AnoParOuImpar = "Impar"
}


console.log("Olá ", nome, ", você tem ", idade, " anos que é um número ", IdadeParOuImpar, 
"e nasceu no ano de ", AnoNascimento, " que é um ano ", AnoParOuImpar)

if(idade >= 18) {
    console.log("Está liberado o consumo de bebidas alcoólicas")
} else {
    "Você é menor de idade"
}