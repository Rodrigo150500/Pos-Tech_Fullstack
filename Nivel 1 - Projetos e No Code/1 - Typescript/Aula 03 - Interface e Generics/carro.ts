interface Carro6{
	marca: string;
	modelo: string;
	ano: number;
	
	ligar():void //Aplicando método ligar
}

class CarroPopular implements Carro6{
	constructor(public marca: string, public modelo: string, public ano:number){}
	
	ligar():void{
		console.log("Carro ligado")
	}
}

const uno = new CarroPopular("Fiat", "Uno", 2010)
uno.ligar()