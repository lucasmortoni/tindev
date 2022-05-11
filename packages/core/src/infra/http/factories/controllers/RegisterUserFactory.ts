import { Request, Response } from 'express'
import { PrismaUsersRepository } from '@accounts/repositories/prisma/PrismaUsersRepository'
import { RegisterUser } from '@accounts/usecases/RegisterUser'
import { RegisterUserController } from '@accounts/controllers/RegisterUserController'

export const registerUserFactory = (req: Request, res: Response) => {
  const prismaRepo = new PrismaUsersRepository()
  const registerUser = new RegisterUser(prismaRepo)
  const registerController = new RegisterUserController(registerUser)

  return registerController.handle(req, res)
}
