import type { Person } from "@/entities/person.entity.js";
import type { User } from "@/entities/user.entity.js";
import { ResourceNotFoundError } from "./errors/resource-not-found-error.js";
import type { IUserRepository } from "@/repositories/user.repository.interface.js";

export class FindWithPerson{

    constructor(private userRepository: IUserRepository){}

    async handler(userId: number): Promise<(Person & User) | undefined>{

        const user = await this.userRepository.findWithPerson(userId)
        if(!user) throw new ResourceNotFoundError()

        return user
    }
}