import { AppError } from '@shared/errors/AppError'
import { User, UserProps } from '../domain/user'
import { UsersRepository } from '../repositories/UsersRepository'

export class RegisterUser {
  constructor(private usersRepo: UsersRepository) {}

  async execute(data: UserProps) {
    const exists = await this.usersRepo.exists(data.email)
    if (exists) {
      throw new AppError('User already in use')
    }
    const user = User.create(data)
    await this.usersRepo.create(user)
  }
}
