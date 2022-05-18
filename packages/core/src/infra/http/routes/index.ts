import { Router } from 'express'

import { usersRouter } from '@infra/http/routes/users.routes'
import { companiesRouter } from '@infra/http/routes/companies.routes'
import { likesRouter } from './likes.routes'

const router = Router()

router.use('/users', usersRouter)
router.use('/companies', companiesRouter)
router.use('/likes', likesRouter)

export { router }
