import { CompanyLikesUser } from '@matches/usecases/CompanyLikesUser'
import { Request, Response } from 'express'

export class CompanyLikesUserController {
  constructor(private companyLikesUser: CompanyLikesUser) {}

  async handle(req: Request, res: Response) {
    const { user_id, company_id } = req.params

    await this.companyLikesUser.execute({ user_id, company_id })

    return res.status(201).send()
  }
}
