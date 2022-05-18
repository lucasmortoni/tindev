import { Router } from 'express'
import { companyLikesUserFactory } from '../factories/controllers/CompanyLikesUserFactory'
import { userLikesCompanyFactory } from '../factories/controllers/UserLikesCompanyFactory'

const likesRouter = Router()

likesRouter.post('/utc/:user_id/:company_id', userLikesCompanyFactory)
likesRouter.post('/ctu/:company_id/:user_id', companyLikesUserFactory)

export { likesRouter }
