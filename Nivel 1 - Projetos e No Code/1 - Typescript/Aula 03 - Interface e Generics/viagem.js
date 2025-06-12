var ViagemInternacional = /** @class */ (function () {
    function ViagemInternacional() {
        this.roupas = ["Camisa", "Calça", "Meia"];
        this.documentos = ["RG", "Passaporte", "Tratado de Tordesilhas"];
        this.dinheiro = 1500;
    }
    ViagemInternacional.prototype.organizarMala = function () {
        console.log("Organizando a mala");
    };
    return ViagemInternacional;
}());
var viagem = new ViagemInternacional();
viagem.organizarMala();
