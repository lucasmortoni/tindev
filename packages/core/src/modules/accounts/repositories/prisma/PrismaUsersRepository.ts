import { prisma } from '@infra/prisma/client'
import { User, UserProps } from '@accounts/domain/user'
import { UsersRepository } from '@accounts/repositories/UsersRepository'

export class PrismaUsersRepository implements UsersRepository {
  async create(user: User): Promise<void> {
    await prisma.user.create({ data: user.props })
  }

  async existsEmail(email: string): Promise<boolean> {
    const result = await prisma.user.findUnique({ where: { email } })
    return !!result
  }

  async existsUsername(username: string): Promise<boolean> {
    const result = await prisma.user.findUnique({ where: { username } })
    return !!result
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = (await prisma.user.findUnique({
      where: { username }
    })) as UserProps

    if (!user) {
      return null
    }
    const result = User.create(user)

    return result
  }
}