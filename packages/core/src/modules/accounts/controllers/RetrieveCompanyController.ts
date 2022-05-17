import { Request, Response } from 'express'
import { RetrieveCompany, RetrieveRequestProps } from '@accounts/usecases/RetrieveCompany'

export class RetrieveCompanyController {
  constructor(private retrieveCompany: RetrieveCompany) {}
  async handle(req: Request, res: Response) {
    const data = req.params as RetrieveRequestProps

    const result = await this.retrieveCompany.execute(data)

    return res.status(200).json(result)
  }
}
