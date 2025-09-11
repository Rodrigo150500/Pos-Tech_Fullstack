import type { IPerson } from "@/entities/models/person.interface.js"
import type { IUser } from "@/entities/models/user.interface.js"



export interface IUserRepository{
    create(user:IUser): Promise<IUser | undefined>
    findWithPerson(userId: number):Promise<(IUser & IPerson) | undefined>
    
}