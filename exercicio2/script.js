let numero1 = Number(prompt("Por favor me dê um número:"))
let numero2 = Number(prompt ("Próximo número:"))

const maior = numero1 > numero2
console.log("O primeiro é maior que o segundo?", maior)

const igual = numero1 === numero2
console.log("O primeiro é igual ao segundo valor?", igual)


const divisao = numero1/numero2
const divisaoresto = numero1 % numero2 === 0 
console.log("O primeiro é divisivel pelo segundo?", divisaoresto)

const divisao2 = numero2 / numero1
const divisaoresto2 = numero2 % numero1 === 0 // maior ou igual a zero porque todo o número é divisivel pelo o outro indepentende do resultado (quebrado ou inteiro)
console.log("O segundo é divisivel pelo primeiro?", divisaoresto2)



