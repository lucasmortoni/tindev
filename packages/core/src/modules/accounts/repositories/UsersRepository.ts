import { User } from '@accounts/domain/user'

export interface UsersRepository {
  create(user: User): Promise<void>
  existsEmail(email: string): Promise<boolean>
  existsUsername(username: string): Promise<boolean>
  findByUsername(username: string): Promise<User | null>
}
