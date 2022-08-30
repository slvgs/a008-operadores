let numeroPar = Number(prompt("Olá me dê um número que seja par!"))
let divisao = numeroPar / 2 
let resultadoDoResto = divisao % 2 //todos ao final estão dando 0 ou 1!
console.log("A divisao do seu número por 2 é", divisao, "E o resto de seu número divido por 2 é:", resultadoDoResto)

//CONVERTENDO O TIPO

resultadoDoResto = Number(resultadoDoResto)
console.log(typeof(resultadoDoResto), resultadoDoResto)

divisao = Number(divisao)
console.log(typeof(divisao), divisao)

// Sempre que o usuário digitar um número impar, o resultado final será quebrado
