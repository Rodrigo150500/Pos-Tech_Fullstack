import type { Person } from "@/entities/person.entity.js";
import type { PersonRepository } from "@/repositories/person.repository.js";

export class CreatePersonUseCase{
    
    constructor(private person_repository: PersonRepository){}

    handler(person:Person){
        return this.person_repository.create(person)
    }
}