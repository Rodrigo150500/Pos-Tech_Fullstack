import { makeCreateUserUseCase } from "@/use_cases/factory/make-create-user-use-case.js";
import type { FastifyReply, FastifyRequest } from "fastify";
import {z} from "zod"

export async function create(request: FastifyRequest, reply: FastifyReply){

    const bodySchema = z.object({
        username: z.string(),
        password: z.string()
    })

    const {username, password} = bodySchema.parse(request.body)

    try{
        const createUseCase = makeCreateUserUseCase()

        const response = await createUseCase.handler({username, password})
        
        return reply.status(201).send(response)

    }catch(error){

        console.log(`Error server ${error}`)

        throw new Error(`Error server: ${error} `)
    }   


}