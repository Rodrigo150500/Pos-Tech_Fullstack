interface Carro2 {
  marca: string;
  modelo: string;
  ano: number;
  tetoSolar?: boolean; // propriedade opcional
}

const carro_1: Carro2= {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2026
};

const carro_2: Carro2 = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2026,
  tetoSolar: true
};
