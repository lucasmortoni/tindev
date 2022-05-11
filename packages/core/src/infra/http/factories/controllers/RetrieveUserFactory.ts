import { Request, Response } from 'express'
import { PrismaUsersRepository } from '@accounts/repositories/prisma/PrismaUsersRepository'
import { RetrieveUser } from '@accounts/usecases/RetrieveUser'
import { RetrieveUserController } from '@accounts/controllers/RetrieveUserController'

export const retrieveUserFactory = (req: Request, res: Response) => {
  const prismaRepo = new PrismaUsersRepository()
  const retrieveUser = new RetrieveUser(prismaRepo)
  const retrieveController = new RetrieveUserController(retrieveUser)

  return retrieveController.handle(req, res)
}
