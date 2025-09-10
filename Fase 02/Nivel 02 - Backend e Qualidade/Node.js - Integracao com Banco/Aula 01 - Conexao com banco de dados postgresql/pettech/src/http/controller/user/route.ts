import type { FastifyInstance } from "fastify";
import { create } from "./create.js";
import { findUser } from "./find-user.js";


export async function userRoutes(app:FastifyInstance){
    app.post("/user", create)
    app.get("/user/:id", findUser)
}