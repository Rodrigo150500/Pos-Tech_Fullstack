import {v4} from "uuid"

export class Uuid{

    value: string = ""

    constructor(){
        this.value = v4()
    }

    get_value(): string{
        return this.value
    }

}