import { MatchProps } from '@matches/domain/match'
import { CreateMatch } from '@matches/usecases/CreateMatch'
import * as yup from 'yup'
import { Request, Response } from 'express'

export class CreateMatchController {
  constructor(private createMatch: CreateMatch) {}

  async handle(req: Request, res: Response) {
    const dataSchema = yup.object().shape({
      user_id: yup.string().required(),
      user_liked: yup.boolean(),
      company_id: yup.string().required(),
      company_liked: yup.boolean()
    })
    const data = req.body as MatchProps

    await dataSchema.validate(data, { abortEarly: false })

    await this.createMatch.execute(data)

    return res.status(201).send()
  }
}
