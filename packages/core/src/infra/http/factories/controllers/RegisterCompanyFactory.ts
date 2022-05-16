import { Request, Response } from 'express'
import { PrismaCompaniesRepository } from '@accounts/repositories/prisma/PrismaCompaniesRepository'
import { RegisterCompany } from '@accounts/usecases/RegisterCompany'
import { RegisterCompanyController } from '@accounts/controllers/RegisterCompanyController'

export const registerCompanyFactory = (req: Request, res: Response) => {
  const prismaRepo = new PrismaCompaniesRepository()
  const registerCompany = new RegisterCompany(prismaRepo)
  const registerController = new RegisterCompanyController(registerCompany)

  return registerController.handle(req, res)
}
