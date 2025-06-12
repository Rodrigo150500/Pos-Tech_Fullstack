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
var Aluno = /** @class */ (function () {
    function Aluno(nome, idade, media, materiaFavorita) {
        this.aprovado = false;
        this.nome = nome;
        this.idade = idade;
        this.media = media;
        this.materiaFavorita = materiaFavorita;
    }
    Aluno.prototype.setAprovado = function (aprovado) {
        this.aprovado = aprovado;
    };
    Aluno.prototype.verificarMedia = function () {
        if (this.media >= 6) {
            this.setAprovado(true);
        }
        else {
            this.setAprovado(false);
        }
    };
    Aluno.prototype.getMateriaFavorita = function () {
        return this.materiaFavorita;
    };
    return Aluno;
}());
var Turma2B = /** @class */ (function (_super) {
    __extends(Turma2B, _super);
    function Turma2B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Turma2B.prototype.verificarSituacao = function () {
        if (this.aprovado == true) {
            console.log("O ".concat(this.nome, " foi aprovado com uma m\u00E9dia de ").concat(this.media, " e sua materia favorita \u00E9 ").concat(this.getMateriaFavorita()));
        }
        else {
            console.log("O ".concat(this.nome, " foi reprovado com uma m\u00E9dia de ").concat(this.media, " e sua materia favorita \u00E9 ").concat(this.getMateriaFavorita()));
        }
    };
    return Turma2B;
}(Aluno));
var jorge = new Turma2B("Jorge", 7, 8, "Matematica");
jorge.verificarMedia();
jorge.verificarSituacao();
