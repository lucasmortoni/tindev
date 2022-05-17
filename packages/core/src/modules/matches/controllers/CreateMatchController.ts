import { CreateMatch } from '@matches/usecases/CreateMatch'
import { Request, Response } from 'express'

export class CreateMatchController {
  constructor(private createMatch: CreateMatch) {}

  async handle(req: Request, res: Response) {
    const data = req.body

    await this.createMatch.execute(data)

    return res.status(201).send()
  }
}
