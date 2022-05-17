import { Router } from 'express'
import { createMatchFactory } from '../factories/controllers/CreateMatchFactory'

const matchesRouter = Router()

matchesRouter.post('/', createMatchFactory)

export { matchesRouter }
