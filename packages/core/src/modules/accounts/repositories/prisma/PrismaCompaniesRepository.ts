import { CompaniesRepository } from '@accounts/repositories/CompaniesRepository'
import { Company, CompanyProps } from '@accounts/domain/company'
import { prisma } from '@infra/prisma/client'

export class PrismaCompaniesRepository implements CompaniesRepository {
  async create(company: Company): Promise<void> {
    await prisma.company.create({ data: company.props })
  }

  async existsEmail(email: string): Promise<boolean> {
    const result = await prisma.company.findUnique({ where: { email } })
    return !!result
  }

  async existsUsername(username: string): Promise<boolean> {
    const result = await prisma.company.findUnique({ where: { username } })
    return !!result
  }

  async findByUsername(username: string): Promise<Company | null> {
    const company = (await prisma.company.findUnique({
      where: { username }
    })) as CompanyProps

    if (!company) {
      return null
    }
    const result = Company.create(company)

    return result
  }
}
