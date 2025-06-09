//Explicito
// Number
var idade;
idade = 25;
//Implicito
var nome = "João";
//Tipos de Variáveis
var numero = 25;
var texto = "Ola Mundo";
var booleano = true;
var listaNomes = ["João", "Marcos", "Antonio"];
console.log("Ola ".concat(listaNomes[0]));
//Manipulando arrays
//Removendo último elemento e retornando esse elemento
console.log("Removendo último elemento e retornando esse elemento");
var retorno_1 = listaNomes.pop();
console.log("O elemento removido foi ".concat(retorno_1));
//Adicionando um elemento no final e retornando o mesmo
console.log("Adicionando um elemento no final e retornando o tamanho do array");
listaNomes = ["João", "Marcos", "Antonio"];
var retorno_2 = listaNomes.push("Elizeu");
console.log(listaNomes);
console.log("O total do array \u00E9 de ".concat(retorno_2));
//removendo o primeiro elemento e retornando o mesmo
console.log("removendo o primeiro elemento e retornando o mesmo");
listaNomes = ["João", "Marcos", "Antonio"];
var retorno_3 = listaNomes.shift();
console.log(listaNomes);
console.log("Removendo o primeiro item ".concat(retorno_3));
//Adicionando um elemento no início do array e retornando o mesmo
console.log("Adicionando um elemento no início do array e retornando o tamanho do array");
listaNomes = ["João", "Marcos", "Antonio"];
var retorno_4 = listaNomes.unshift();
console.log(listaNomes);
console.log("O tamanho agora do array \u00E9 de ".concat(retorno_4));
//Executando uma função para reducer, funcionar como um for com count+= algo
console.log("Executando uma função para reducer, funcionar como um for com count+= algo");
var listaNumeros = [1, 2, 3, 4, 5, 6];
var retorno_5 = listaNumeros.reduce(function (acumulador, atual) {
    return acumulador + atual;
});
console.log(retorno_5);
