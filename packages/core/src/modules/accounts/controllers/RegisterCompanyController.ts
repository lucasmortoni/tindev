import { Request, Response } from 'express'
import { RegisterCompany } from '@accounts/usecases/RegisterCompany'
import * as yup from 'yup'
import { CompanyProps } from '@accounts/domain/company'

export class RegisterCompanyController {
  constructor(private registerCompany: RegisterCompany) {}
  async handle(req: Request, res: Response) {
    const dataSchema = yup.object().shape({
      avatar_url: yup.string(),
      name: yup.string().required(),
      username: yup.string().required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(8)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .required()
    })
    const data = req.body as CompanyProps

    await dataSchema.validate(data, { abortEarly: false })

    await this.registerCompany.execute(data)

    return res.status(201).send()
  }
}
