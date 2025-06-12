var CarroPopular = /** @class */ (function () {
    function CarroPopular(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    CarroPopular.prototype.ligar = function () {
        console.log("Carro ligado");
    };
    return CarroPopular;
}());
var uno = new CarroPopular("Fiat", "Uno", 2010);
uno.ligar();
