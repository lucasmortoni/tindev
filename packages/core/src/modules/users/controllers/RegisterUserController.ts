import { Request, Response } from 'express'
import { RegisterUser } from '../useCases/RegisterUser'

export class RegisterUserController {
  constructor(private registerUser: RegisterUser) {}
  async handle(req: Request, res: Response) {
    const data = req.body
    await this.registerUser.execute(data)
    return res.status(201).send()
  }
}
