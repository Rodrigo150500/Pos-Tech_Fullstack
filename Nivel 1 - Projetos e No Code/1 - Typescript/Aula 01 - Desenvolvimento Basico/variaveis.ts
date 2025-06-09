//Explicito
// Number
let idade: number;
idade = 25

//Implicito
let nome = "João"

//Tipos de Variáveis
let numero: number = 25
let texto: string = "Ola Mundo"
let booleano: boolean = true
let listaNomes: string[] = ["João", "Marcos", "Antonio"]


console.log(`Ola ${listaNomes[0]}`)

//Manipulando arrays
//Removendo último elemento e retornando esse elemento
console.log("Removendo último elemento e retornando esse elemento")
const retorno_1 = listaNomes.pop()
console.log(`O elemento removido foi ${retorno_1}`)

//Adicionando um elemento no final e retornando o mesmo
console.log("Adicionando um elemento no final e retornando o tamanho do array")
listaNomes = ["João", "Marcos", "Antonio"]
const retorno_2 = listaNomes.push("Elizeu")
console.log(listaNomes)
console.log(`O total do array é de ${retorno_2}`)


//removendo o primeiro elemento e retornando o mesmo
console.log("removendo o primeiro elemento e retornando o mesmo")
listaNomes = ["João", "Marcos", "Antonio"]
const retorno_3 = listaNomes.shift()
console.log(listaNomes)
console.log(`Removendo o primeiro item ${retorno_3}`)

//Adicionando um elemento no início do array e retornando o mesmo
console.log("Adicionando um elemento no início do array e retornando o tamanho do array")
listaNomes = ["João", "Marcos", "Antonio"]
const retorno_4 = listaNomes.unshift()
console.log(listaNomes)
console.log(`O tamanho agora do array é de ${retorno_4}`)

//Executando uma função para reducer, funcionar como um for com count+= algo
console.log("Executando uma função para reducer, funcionar como um for com count+= algo")
const listaNumeros: number[]= [1,2,3,4,5,6]
const retorno_5 =  listaNumeros.reduce((acumulador, atual)=>{
    return acumulador + atual
})

console.log(retorno_5)