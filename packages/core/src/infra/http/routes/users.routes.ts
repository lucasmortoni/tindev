import { Router } from 'express'
import { registerUserFactory } from '@infra/http/factories/controllers/RegisterUserFactory'
import { retrieveUserFactory } from '@infra/http/factories/controllers/RetrieveUserFactory'

const usersRouter = Router()

usersRouter.get('/:username', retrieveUserFactory)
usersRouter.post('/', registerUserFactory)

export { usersRouter }
