import { Request, Response } from 'express'
import { PrismaMatchesRepository } from '@matches/repositories/prisma/PrismaMatchesRepository'
import { CreateMatch } from '@matches/usecases/CreateMatch'
import { CreateMatchController } from '@matches/controllers/CreateMatchController'

export const createMatchFactory = (req: Request, res: Response) => {
  const prismaRepo = new PrismaMatchesRepository()
  const createMatch = new CreateMatch(prismaRepo)
  const createMatchController = new CreateMatchController(createMatch)

  return createMatchController.handle(req, res)
}
