import { User } from "@/entities/user.entity.js";
import type { IUserRepository } from "@/repositories/user.repository.interface.js";

export class CreateUserUseCase{

    constructor(private userRepository: IUserRepository){}

    async handler(user:User):Promise<User | undefined>{

        return await this.userRepository.create(user)

    }
}