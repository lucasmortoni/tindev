import { Request, Response } from 'express'
import { PrismaCompaniesRepository } from '@accounts/repositories/prisma/PrismaCompaniesRepository'
import { RetrieveCompany } from '@accounts/usecases/RetrieveCompany'
import { RetrieveCompanyController } from '@accounts/controllers/RetrieveCompanyController'

export const retrieveCompanyFactory = (req: Request, res: Response) => {
  const prismaRepo = new PrismaCompaniesRepository()
  const retrieveCompany = new RetrieveCompany(prismaRepo)
  const retrieveController = new RetrieveCompanyController(retrieveCompany)

  return retrieveController.handle(req, res)
}
