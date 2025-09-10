import fastify from 'fastify'
import { personRoute } from '@/http/controller/person/routes.js'
import { userRoutes } from './http/controller/user/route.js'
import { globalErrorHandler } from './utils/global-error-handler.js'

export const app = fastify()


app.register(personRoute)
app.register(userRoutes)

app.setErrorHandler(globalErrorHandler)