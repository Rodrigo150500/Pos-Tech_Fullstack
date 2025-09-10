import { UserReposirory } from "@/repositories/pg/user.repository.js";
import { CreateUserUseCase } from "../create-user.js";

export function makeCreateUserUseCase(){
    const userRepository = new UserReposirory()
    const userUseCase = new CreateUserUseCase(userRepository)

    return userUseCase
}