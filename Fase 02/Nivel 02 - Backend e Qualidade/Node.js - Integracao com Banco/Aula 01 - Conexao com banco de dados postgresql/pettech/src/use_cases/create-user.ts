import { User } from "@/entities/user.entity.js";
import { UserReposirory } from "@/repositories/user.repository.js";

export class CreateUserUseCase{

    constructor(private userRepository: UserReposirory){}

    async handler(user:User):Promise<User | undefined>{

        return await this.userRepository.create(user)

    }
}