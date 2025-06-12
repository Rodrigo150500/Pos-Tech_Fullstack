//Classe abstrata podemos aplicar para qualquer tipo de bolo
abstract class Bolo{ 
	
	//Atributos de nossa classe, sendo acessível a subclasses
	protected farinha: string = "Farinha de trigo";
	protected ovos: number = 3
	
	// Obrigatório ter na subclasse
	abstract preparar(): void 
	
	//Toda subclasse precisa ter esse método independente do bolo,
	//mas não é obrigatório usar ou aplicar
	assar(): void{
		console.log("Assando por 40 minutos a 220°C")
	}
}

class BoloDeChocolate extends Bolo{
	private chocolate: string = "Chocolate em pó"
	
	preparar():void{
		console.log("Misturando tudo")
		console.log(`Adicionando ${this.farinha}`)
		console.log(`Adicionando ${this.ovos}`)
		console.log(`Adicionando ${this.chocolate}`)
	}
}

const bolo_de_chocolate = new BoloDeChocolate()
bolo_de_chocolate.preparar()
bolo_de_chocolate.assar()