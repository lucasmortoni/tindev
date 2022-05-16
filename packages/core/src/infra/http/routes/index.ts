import { Router } from 'express'

import { usersRouter } from '@infra/http/routes/users.routes'
import { companiesRouter } from '@infra/http/routes/companies.routes'

const router = Router()

router.use('/users', usersRouter)
router.use('/companies', companiesRouter)

export { router }
