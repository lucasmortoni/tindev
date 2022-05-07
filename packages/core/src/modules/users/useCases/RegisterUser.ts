import { User, UserProps } from '../domain/user'
import { UsersRepository } from '../repositories/UsersRepository'
import { AppError } from '@shared/errors/AppError'

export class RegisterUser {
  constructor(private usersRepo: UsersRepository) {}

  async execute(data: UserProps) {
    const existsEmail = await this.usersRepo.existsEmail(data.email)
    if (existsEmail) {
      throw new AppError('email already in use')
    }
    const existsUsername = await this.usersRepo.existsUsername(data.username)
    if (existsUsername) {
      throw new AppError('username already in use')
    }
    const user = User.create(data)
    await this.usersRepo.create(user)
  }
}
