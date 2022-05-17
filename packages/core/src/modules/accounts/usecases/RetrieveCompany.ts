import { CompaniesRepository } from '@accounts/repositories/CompaniesRepository'
import { AppError } from '@shared/errors/AppError'

export type RetrieveRequestProps = {
  username: string
}

export class RetrieveCompany {
  constructor(private companiesRepo: CompaniesRepository) {}

  async execute(data: RetrieveRequestProps) {
    const existsUsername = await this.companiesRepo.existsUsername(data.username)
    if (!existsUsername) {
      throw new AppError('username does not match any companies account')
    }
    const result = await this.companiesRepo.findByUsername(data.username)
    return result?.props
  }
}
