function caixaMagica<T>(item: T):T{
	return item
}

let numbers = caixaMagica<number>(1)
let letras = caixaMagica<string>("ola")

console.log(numbers)
console.log(letras)

function caixaDupla<T, U>(item1: T, item2:U): [T,U]{
	return [item1, item2]
}

let n = caixaDupla<string, number>("Rodrigo", 25)

console.log(n)