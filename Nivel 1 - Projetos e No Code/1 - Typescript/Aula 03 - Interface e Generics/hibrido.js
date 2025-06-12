var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Transporte = /** @class */ (function () {
    function Transporte() {
        this.ligado = false;
    }
    Transporte.prototype.ligar = function () {
        this.ligado = true;
        console.log("Transporteligado");
    };
    Transporte.prototype.desligar = function () {
        this.ligado = false;
        console.log("Transporte desligado");
    };
    return Transporte;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Carro.prototype.mover = function () {
        if (this.ligado == true) {
            console.log("Carro andando");
        }
        else {
            console.log("Ligar motor");
        }
    };
    return Carro;
}(Transporte));
var carro = new Carro();
carro.ligar();
carro.mover();
carro.desligar();
