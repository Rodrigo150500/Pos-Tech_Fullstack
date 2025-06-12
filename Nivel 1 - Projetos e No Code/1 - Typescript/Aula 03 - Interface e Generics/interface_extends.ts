interface Carro3{
	marca: string;
	modelo: string;
	ano: number;
}

interface CarroLuxo extends Carro3{ //Adicionando mais características para novos casos
	sistemaDeSom: boolean;
	interiorDeCouro: boolean;
}

const bmw : CarroLuxo = {
	marca: "bmw",
	modelo: "JX",
	ano: 2025,
	sistemaDeSom: true,
	interiorDeCouro: true
}