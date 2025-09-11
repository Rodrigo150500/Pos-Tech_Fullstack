import type { IPerson } from "@/entities/models/person.interface.js";
import type { IUser } from "@/entities/models/user.interface.js";
import { database } from "@/lib/pg/db.js";


export class UserReposirory{

    public async create({username, password}:IUser): Promise<IUser | undefined>{
        const result = await database.clientInstance?.query(
            `INSERT INTO "user" (username, password)  VALUES ($1, $2) RETURNING *`,
            [username, password]
        )

        return result?.rows[0]
    }

    public async findWithPerson(userId: number):Promise<(IUser & IPerson) | undefined>{

        const result = await database.clientInstance?.query(
            `SELECT * FROM "user"
            LEFT JOIN "person" ON "user".id = person.user_id 
            WHERE "user".id = $1`,
            [userId]
        )

        return result?.rows[0]
    }

}