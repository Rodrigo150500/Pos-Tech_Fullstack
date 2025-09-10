import { makeFindWithPerson } from "@/use_cases/factory/make-find-with-person.js";
import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function findUser(request: FastifyRequest, reply: FastifyReply){

    const paramsSchema = z.object({
        id: z.coerce.number()
    })

    const {id} = paramsSchema.parse(request.params)


    const findUserUseCase = makeFindWithPerson()

    const result = await findUserUseCase.handler(id)

    return reply.status(200).send(result)

    

}