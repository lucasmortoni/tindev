import { Request, Response } from 'express'
import { PrismaUsersRepository } from '@modules/users/repositories/prisma/PrismaUsersRepository'
import { RegisterUser } from '@modules/users/usecases/RegisterUser'
import { RegisterUserController } from '@modules/users/controllers/RegisterUserController'

export const registerUserFactory = (req: Request, res: Response) => {
  const prismaRepo = new PrismaUsersRepository()
  const registerUser = new RegisterUser(prismaRepo)
  const registerController = new RegisterUserController(registerUser)

  return registerController.handle(req, res)
}
