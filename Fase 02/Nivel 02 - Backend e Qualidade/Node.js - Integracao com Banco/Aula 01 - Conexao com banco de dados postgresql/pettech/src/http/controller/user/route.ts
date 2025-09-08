import type { FastifyInstance } from "fastify";
import { create } from "./create.js";


export async function userRoutes(app:FastifyInstance){
    app.post("/user", create)
}