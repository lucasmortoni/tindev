import { Request, Response } from 'express'
import { RegisterUser } from '../useCases/RegisterUser'
import * as yup from 'yup'

export class RegisterUserController {
  constructor(private registerUser: RegisterUser) {}
  async handle(req: Request, res: Response) {
    const dataSchema = yup.object().shape({
      avatar_url: yup.string(),
      name: yup.string().required(),
      surname: yup.string().required(),
      username: yup.string().required(),
      email: yup.string().required().email(),
      password: yup.string().required()
    })
    const data = req.body

    await dataSchema.validate(data, { abortEarly: false })

    await this.registerUser.execute(data)

    return res.status(201).send()
  }
}
