import type { Person } from "@/entities/person.entity.js";
import type { IPersonRepository } from "@/repositories/person.repository.interface.js";

export class CreatePersonUseCase{
    
    constructor(private person_repository: IPersonRepository){}

    handler(person:Person){
        return this.person_repository.create(person)
    }
}