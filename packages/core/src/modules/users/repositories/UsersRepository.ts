import { User } from '../domain/user'

export interface UsersRepository {
  create(user: User): Promise<void>
  existsEmail(email: string): Promise<boolean>
  existsUsername(username: string): Promise<boolean>
}
