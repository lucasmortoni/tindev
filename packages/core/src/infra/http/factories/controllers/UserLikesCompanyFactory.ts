import { PrismaCompaniesRepository } from '@accounts/repositories/prisma/PrismaCompaniesRepository'
import { PrismaUsersRepository } from '@accounts/repositories/prisma/PrismaUsersRepository'
import { UserLikesCompanyController } from '@matches/controllers/UserLikesCompanyController'
import { PrismaMatchesRepository } from '@matches/repositories/prisma/PrismaMatchesRepository'
import { UserLikesCompany } from '@matches/usecases/UserLikesCompany'
import { Request, Response } from 'express'

export const userLikesCompanyFactory = (req: Request, res: Response) => {
  const prismaUser = new PrismaUsersRepository()
  const prismaCompanies = new PrismaCompaniesRepository()
  const prismaMatches = new PrismaMatchesRepository()
  const userLikeCompany = new UserLikesCompany(prismaUser, prismaCompanies, prismaMatches)
  const userLikesCompanyController = new UserLikesCompanyController(userLikeCompany)

  return userLikesCompanyController.handle(req, res)
}
