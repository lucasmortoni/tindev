import { PrismaCompaniesRepository } from '@accounts/repositories/prisma/PrismaCompaniesRepository'
import { PrismaUsersRepository } from '@accounts/repositories/prisma/PrismaUsersRepository'
import { CompanyLikesUserController } from '@matches/controllers/CompanyLikesUserController'
import { PrismaMatchesRepository } from '@matches/repositories/prisma/PrismaMatchesRepository'
import { CompanyLikesUser } from '@matches/usecases/CompanyLikesUser'
import { Request, Response } from 'express'

export const companyLikesUserFactory = (req: Request, res: Response) => {
  const prismaUser = new PrismaUsersRepository()
  const prismaCompanies = new PrismaCompaniesRepository()
  const prismaMatches = new PrismaMatchesRepository()
  const companyLikesUser = new CompanyLikesUser(prismaUser, prismaCompanies, prismaMatches)
  const companyLikesUserController = new CompanyLikesUserController(companyLikesUser)

  return companyLikesUserController.handle(req, res)
}
