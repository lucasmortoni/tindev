import { Company } from '@accounts/domain/company'

export interface CompaniesRepository {
  create(company: Company): Promise<void>
  existsEmail(email: string): Promise<boolean>
  existsUsername(username: string): Promise<boolean>
  findByUsername(username: string): Promise<Company | null>
}
