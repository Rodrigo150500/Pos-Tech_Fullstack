import type { Person } from "@/entities/person.entity.js";
import type { User } from "@/entities/user.entity.js";
import { UserReposirory } from "@/repositories/user.repository.js";

export class FindWithPerson{

    constructor(private useRepository: UserReposirory){}

    async handler(userId: number): Promise<(Person & User) | undefined>{
        return this.useRepository.findWithPerson(userId)
    }
}