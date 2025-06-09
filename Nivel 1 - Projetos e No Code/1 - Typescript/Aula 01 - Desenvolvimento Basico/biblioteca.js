var Livro = /** @class */ (function () {
    function Livro(titulo, anoPublicacao) {
        this.titulo = titulo;
        this.anoPublicao = anoPublicacao;
    }
    Livro.prototype.exibirDetalhes = function () {
        console.log("Livro com o nome ".concat(this.titulo, " foi publicado em ").concat(this.anoPublicao, "."));
    };
    return Livro;
}());
var livro = new Livro("O nome do vento", 2007);
livro.exibirDetalhes();
