import { Company, CompanyProps } from '@accounts/domain/company'
import { CompaniesRepository } from '@accounts/repositories/CompaniesRepository'
import { AppError } from '@shared/errors/AppError'

export class RegisterCompany {
  constructor(private companiesRepo: CompaniesRepository) {}

  async execute(data: CompanyProps) {
    const existsEmail = await this.companiesRepo.existsEmail(data.email)
    if (existsEmail) {
      throw new AppError('email already in use')
    }
    const existsUsername = await this.companiesRepo.existsUsername(data.username)
    if (existsUsername) {
      throw new AppError('username already in use')
    }
    const company = Company.create(data)
    await this.companiesRepo.create(company)
  }
}
