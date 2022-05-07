import { prisma } from '@infra/prisma/client'
import { User } from '@modules/users/domain/user'
import { UsersRepository } from '../UsersRepository'

export class PrismaUsersRepository implements UsersRepository {
  async create(user: User): Promise<void> {
    await prisma.user.create({ data: user.props })
  }

  async exists(email: string): Promise<boolean> {
    const result = await prisma.user.findUnique({ where: { email } })
    return !!result
  }
}
