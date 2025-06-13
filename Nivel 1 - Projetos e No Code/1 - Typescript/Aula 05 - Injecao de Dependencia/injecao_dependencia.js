var Interruptor = /** @class */ (function () {
    function Interruptor() {
    }
    Interruptor.prototype.ligar = function () {
        console.log("Lâmpada ligada");
    };
    return Interruptor;
}());
var Lampada = /** @class */ (function () {
    function Lampada(interruptor) {
        this.interruptor = interruptor;
    }
    Lampada.prototype.acender = function () {
        this.interruptor.ligar();
    };
    return Lampada;
}());
var lampada = new Lampada(new Interruptor());
lampada.acender();
