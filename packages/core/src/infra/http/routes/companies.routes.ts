import { Router } from 'express'
import { registerCompanyFactory } from '@infra/http/factories/controllers/RegisterCompanyFactory'
import { retrieveCompanyFactory } from '../factories/controllers/RetrieveCompanyController'

const companiesRouter = Router()

companiesRouter.get('/:username', retrieveCompanyFactory)
companiesRouter.post('/', registerCompanyFactory)

export { companiesRouter }
