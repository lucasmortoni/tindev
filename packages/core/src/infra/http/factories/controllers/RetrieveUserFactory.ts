import { Request, Response } from 'express'
import { PrismaUsersRepository } from '@modules/users/repositories/prisma/PrismaUsersRepository'
import { RetrieveUser } from '@modules/users/usecases/RetrieveUser'
import { RetrieveUserController } from '@modules/users/controllers/RetrieveUserController'

export const retrieveUserFactory = (req: Request, res: Response) => {
  const prismaRepo = new PrismaUsersRepository()
  const retrieveUser = new RetrieveUser(prismaRepo)
  const retrieveController = new RetrieveUserController(retrieveUser)

  return retrieveController.handle(req, res)
}
