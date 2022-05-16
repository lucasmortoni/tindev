import { Request, Response } from 'express'
import { RegisterCompany } from '@accounts/usecases/RegisterCompany'
import { CompanyProps } from '@accounts/domain/company'

export class RegisterCompanyController {
  constructor(private registerCompany: RegisterCompany) {}
  async handle(req: Request, res: Response) {
    const data = req.body as CompanyProps

    await this.registerCompany.execute(data)

    return res.status(201).send()
  }
}
