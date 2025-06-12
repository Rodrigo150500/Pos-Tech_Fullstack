interface Personagem{
	nome: string;
	idade: number;
	vida: number;
	
	atacar(dano: number):void
}

class Heroi implements Personagem{
	nome: string;
	idade: number;
	vida: number;
	
	constructor(nome: string, idade: number, vida:number){
		this.nome = nome;
		this.idade = idade;
		this.vida = vida
	}
	
	atacar(dano: number):void{
		console.log("Soco dado")
	}
}

class Vilao implements Personagem{

	nome: string;
	idade: number;
	vida: number;
	
	constructor(nome: string, idade: number, vida:number){
		this.nome = nome;
		this.idade = idade;
		this.vida = vida
	}
	
	atacar(dano: number):void{
		console.log("Raio laser")
	}
}

const heroi = new Heroi("Kevin", 22, 100)
const vilao = new Vilao("Lucifer", 10, 250)

heroi.atacar(8)
vilao.atacar(9)