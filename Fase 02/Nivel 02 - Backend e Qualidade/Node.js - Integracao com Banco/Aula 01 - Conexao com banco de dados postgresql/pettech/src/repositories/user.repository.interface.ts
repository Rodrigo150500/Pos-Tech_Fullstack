import type { Person } from "@/entities/person.entity.js";
import type { User } from "@/entities/user.entity.js";


export interface IUserRepository{
    create(user:User): Promise<User | undefined>
    findWithPerson(userId: number):Promise<(User & Person) | undefined>
    
}