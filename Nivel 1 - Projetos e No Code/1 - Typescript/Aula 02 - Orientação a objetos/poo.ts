class Animal { // Classe Base
	nome: string
	constructor(nome: string){
		this.nome = nome
	}
	
	fazerSom():void{
		console.log("som genérico")
	}
}

class Cachorro extends Animal{ //classe derivada da classe pai com herança e polimorfismo

	fazerSom(){
		console.log(`${this.nome} faz au au`)
	}
}

class Gato extends Animal{ //classe derivada da classe pai com herança e polimorfismo

	fazerSom(){
		console.log(`${this.nome} faz Miau`)
	}
}

//Função que demonstra o comportamento
function apresentarAnimal(animal:Animal){
	animal.fazerSom()
}

//criando objetos
const rex = new Cachorro("rex")
const felix = new Gato("felix")

apresentarAnimal(rex)
apresentarAnimal(felix)