import { Person } from "@/entities/person.entity.js"
import { database } from "@/lib/pg/db.js"

export class PersonRepository{

    async create({name, cpf, birth, email, user_id}: Person): Promise<Person | undefined>{
        const result = await database.clientInstance?.query(
            'INSERT INTO person (cpf, name, birth, email, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [cpf, name, birth, email, user_id]
        )

        return result?.rows[0]
    }

    public async findWithPerson(){

    }
}