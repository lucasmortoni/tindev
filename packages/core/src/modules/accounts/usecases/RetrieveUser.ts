import { UsersRepository } from '@accounts/repositories/UsersRepository'
import { AppError } from '@shared/errors/AppError'

export type RetrieveRequestProps = {
  username: string
}

export class RetrieveUser {
  constructor(private usersRepo: UsersRepository) {}

  async execute(data: RetrieveRequestProps) {
    const existsUsername = await this.usersRepo.existsUsername(data.username)
    if (!existsUsername) {
      throw new AppError('username does not match any users account')
    }
    const result = await this.usersRepo.findByUsername(data.username)
    return result?.props
  }
}
