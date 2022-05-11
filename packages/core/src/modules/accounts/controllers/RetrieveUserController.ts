import { Request, Response } from 'express'
import {
  RetrieveUser,
  RetrieveRequestProps
} from '@accounts/usecases/RetrieveUser'

export class RetrieveUserController {
  constructor(private retrieveUser: RetrieveUser) {}
  async handle(req: Request, res: Response) {
    const data = req.params as RetrieveRequestProps

    const result = await this.retrieveUser.execute(data)

    return res.status(200).json(result)
  }
}
