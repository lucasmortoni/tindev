import { Request, Response } from 'express'
import { RegisterUser } from '@accounts/usecases/RegisterUser'
import * as yup from 'yup'
import { UserProps } from '@accounts/domain/user'

export class RegisterUserController {
  constructor(private registerUser: RegisterUser) {}

  async handle(req: Request, res: Response) {
    const dataSchema = yup.object().shape({
      avatar_url: yup.string(),
      name: yup.string().required(),
      surname: yup.string().required(),
      username: yup.string().required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(8)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .required()
    })
    const data = req.body as UserProps

    await dataSchema.validate(data, { abortEarly: false })

    await this.registerUser.execute(data)

    return res.status(201).send()
  }
}
