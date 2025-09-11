import type { IPerson } from "@/entities/models/person.interface.js";


export interface IPersonRepository{
    create(person: IPerson): Promise<IPerson | undefined>    
}