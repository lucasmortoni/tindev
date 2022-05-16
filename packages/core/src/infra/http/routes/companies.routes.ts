import { Router } from 'express'
import { registerCompanyFactory } from '@infra/http/factories/controllers/RegisterCompanyFactory'

const companiesRouter = Router()

companiesRouter.post('/', registerCompanyFactory)

export { companiesRouter }
