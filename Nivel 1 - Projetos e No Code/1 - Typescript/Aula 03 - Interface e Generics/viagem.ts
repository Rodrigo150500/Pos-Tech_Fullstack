interface BagagemDeViagem{
	roupas: string[];
	documentos: string[];
	dinheiro: number
	
	organizarMala():void
}

class ViagemInternacional implements BagagemDeViagem{
	roupas = ["Camisa", "Calça", "Meia"];
	documentos = ["RG", "Passaporte", "Tratado de Tordesilhas"];
	dinheiro = 1500
	
	organizarMala():void{
		console.log("Organizando a mala")		
	}
}

const viagem = new ViagemInternacional()
viagem.organizarMala()