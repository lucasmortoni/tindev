import { RegisterUserController } from '@modules/users/controllers/RegisterUserController'
import { PrismaUsersRepository } from '@modules/users/repositories/prisma/PrismaUsersRepository'
import { RegisterUser } from '@modules/users/useCases/RegisterUser'
import { Request, Response } from 'express'

export const registerUserFactory = (req: Request, res: Response) => {
  const prismaRepo = new PrismaUsersRepository()
  const registerUser = new RegisterUser(prismaRepo)
  const registerController = new RegisterUserController(registerUser)

  return registerController.handle(req, res)
}
