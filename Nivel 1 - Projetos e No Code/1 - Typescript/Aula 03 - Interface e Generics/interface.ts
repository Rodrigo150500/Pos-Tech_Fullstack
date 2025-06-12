interface Estudante{
    nome: string;
    idade: number;
    aprovado: boolean;
}

abstract class Aluno implements Estudante{
   
    nome: string;
    idade: number;
    aprovado: boolean = false

    protected materiaFavorita: string;
    protected media: number

    constructor(nome: string, idade: number, media: number, materiaFavorita: string){
        this.nome = nome;
        this.idade = idade;
        this.media = media
        this.materiaFavorita = materiaFavorita
    }

    setAprovado(aprovado: boolean): void{
        this.aprovado = aprovado
    }

    verificarMedia():void{
        if (this.media >= 6){
            this.setAprovado(true)
        }else{
            this.setAprovado(false)
        }
    }

    getMateriaFavorita():string{
        return this.materiaFavorita
    }

    abstract verificarSituacao():void;   
}

class Turma2B extends Aluno{
    verificarSituacao(): void {
        if (this.aprovado == true){
            console.log(`O ${this.nome} foi aprovado com uma média de ${this.media} e sua materia favorita é ${this.getMateriaFavorita()}`)
        }else{
            console.log(`O ${this.nome} foi reprovado com uma média de ${this.media} e sua materia favorita é ${this.getMateriaFavorita()}`)
        }
    }
}

const jorge = new Turma2B("Jorge", 7, 8,"Matematica")
jorge.verificarMedia()
jorge.verificarSituacao()