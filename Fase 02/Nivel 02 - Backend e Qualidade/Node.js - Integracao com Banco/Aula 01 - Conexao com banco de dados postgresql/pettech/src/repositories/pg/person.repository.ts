import { database } from "@/lib/pg/db.js"
import type { IPersonRepository } from "../person.repository.interface.js"
import type { IPerson } from "@/entities/models/person.interface.js"

export class PersonRepository implements IPersonRepository{

    public async create({name, cpf, birth, email, user_id}: IPerson): Promise<IPerson | undefined>{
        const result = await database.clientInstance?.query(
            'INSERT INTO person (cpf, name, birth, email, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [cpf, name, birth, email, user_id]
        )

        return result?.rows[0]
    }

    public async findWithPerson(){

    }
}