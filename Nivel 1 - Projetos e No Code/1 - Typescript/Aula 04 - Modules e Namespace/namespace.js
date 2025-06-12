"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matematica = void 0;
var Matematica;
(function (Matematica) {
    function somar(a, b) {
        return a + b;
    }
    Matematica.somar = somar;
    function subtrair(a, b) {
        return a - b;
    }
    Matematica.subtrair = subtrair;
    Matematica.PI = 3.14;
})(Matematica || (exports.Matematica = Matematica = {}));
