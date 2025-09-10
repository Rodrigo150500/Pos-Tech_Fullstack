import { UserReposirory } from "@/repositories/pg/user.repository.js";
import { FindWithPerson } from "../find-with-person.js";

export function makeFindWithPerson(){
    const userRepository = new UserReposirory()
    const findWithPersonUseCase = new FindWithPerson(userRepository)

    return findWithPersonUseCase
}