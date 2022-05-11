import { Router } from 'express'
import { registerUserFactory } from '../factories/controllers/RegisterUserFactory'
import { retrieveUserFactory } from '../factories/controllers/RetrieveUserFactory'

const usersRouter = Router()

usersRouter.get('/:username', retrieveUserFactory)
usersRouter.post('/', registerUserFactory)

export { usersRouter }
