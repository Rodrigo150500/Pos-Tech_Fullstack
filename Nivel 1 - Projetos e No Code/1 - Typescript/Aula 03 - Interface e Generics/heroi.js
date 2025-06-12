var Heroi = /** @class */ (function () {
    function Heroi(nome, idade, vida) {
        this.nome = nome;
        this.idade = idade;
        this.vida = vida;
    }
    Heroi.prototype.atacar = function (dano) {
        console.log("Soco dado");
    };
    return Heroi;
}());
var Vilao = /** @class */ (function () {
    function Vilao(nome, idade, vida) {
        this.nome = nome;
        this.idade = idade;
        this.vida = vida;
    }
    Vilao.prototype.atacar = function (dano) {
        console.log("Raio laser");
    };
    return Vilao;
}());
var heroi = new Heroi("Kevin", 22, 100);
var vilao = new Vilao("Lucifer", 10, 250);
heroi.atacar(8);
vilao.atacar(9);
