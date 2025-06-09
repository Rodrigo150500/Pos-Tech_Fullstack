class Livro{
    titulo: string
    anoPublicao: number

    constructor(titulo: string, anoPublicacao: number){
        this.titulo = titulo
        this.anoPublicao = anoPublicacao
        
    }

    exibirDetalhes(){
        console.log(`Livro com o nome ${this.titulo} foi publicado em ${this.anoPublicao}.`)
    }



}

const livro = new Livro("O nome do vento", 2007)

livro.exibirDetalhes()