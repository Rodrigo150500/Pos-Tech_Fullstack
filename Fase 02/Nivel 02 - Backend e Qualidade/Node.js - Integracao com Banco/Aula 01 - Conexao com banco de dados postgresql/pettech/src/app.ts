import fastify from 'fastify'
import { personRoute } from '@/http/controller/person/routes.js'
import { userRoutes } from './http/controller/user/route.js'

export const app = fastify()


app.register(personRoute)
app.register(userRoutes)