class Interruptor{
    ligar(){
        console.log("Lâmpada ligada")
    }
}

class Lampada{
    private interruptor: Interruptor

    constructor(interruptor: Interruptor){
        this.interruptor = interruptor
    }

    acender(){
        this.interruptor.ligar()
    }
}

const lampada = new Lampada(new Interruptor())
lampada.acender()