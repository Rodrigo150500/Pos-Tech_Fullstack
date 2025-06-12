interface Veiculo3{
	ligar(): void
	desligar(): void
}

abstract class Transporte implements Veiculo3{

	protected ligado: boolean = false
	
	ligar():void{
		this.ligado = true
		console.log("Transporteligado")
	}
	
	desligar():void{
		this.ligado = false
		console.log("Transporte desligado")
	}
	
	abstract mover():void
}

class Carro extends Transporte{

	mover():void{
		if(this.ligado == true){
			console.log("Carro andando")
		}else{
			console.log("Ligar motor")
		}
	}
}

const carro = new Carro()
carro.ligar()
carro.mover()
carro.desligar()