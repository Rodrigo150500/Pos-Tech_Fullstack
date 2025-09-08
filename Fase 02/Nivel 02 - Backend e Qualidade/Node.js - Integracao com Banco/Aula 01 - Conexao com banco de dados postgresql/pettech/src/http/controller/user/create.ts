import { UserReposirory } from "@/repositories/user.repository.js";
import { CreateUserUseCase } from "@/use_cases/create-user.js";
import type { FastifyReply, FastifyRequest } from "fastify";
import {z} from "zod"

export async function create(request: FastifyRequest, reply: FastifyReply){

    const bodySchema = z.object({
        username: z.string(),
        password: z.string()
    })

    const {username, password} = bodySchema.parse(request.body)

    try{
        const userRepository = new UserReposirory()
        const createUseCase = new CreateUserUseCase(userRepository)

        const response = await createUseCase.handler({username, password})
        
        return reply.status(201).send(response)

    }catch(error){

        console.log(`Error server ${error}`)

        throw new Error(`Error server: ${error} `)
    }
    


}