import type { FastifyInstance } from "fastify";
import { create } from "./create.js";


export async function personRoute(app: FastifyInstance){
    app.post("/person", create)
}