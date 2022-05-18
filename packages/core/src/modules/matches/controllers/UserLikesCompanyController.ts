import { UserLikesCompany } from '@matches/usecases/UserLikesCompany'
import { Request, Response } from 'express'

export class UserLikesCompanyController {
  constructor(private userLikesCompany: UserLikesCompany) {}

  async handle(req: Request, res: Response) {
    const { user_id, company_id } = req.params

    await this.userLikesCompany.execute({ user_id, company_id })

    return res.status(201).send()
  }
}
