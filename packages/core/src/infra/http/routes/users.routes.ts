import { Router } from 'express'
import { registerUserFactory } from '../factories/controllers/RegisterUserFactory'

const usersRouter = Router()

usersRouter.post('/', registerUserFactory)

export { usersRouter }
