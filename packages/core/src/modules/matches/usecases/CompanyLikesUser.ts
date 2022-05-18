import { CompaniesRepository } from '@accounts/repositories/CompaniesRepository'
import { UsersRepository } from '@accounts/repositories/UsersRepository'
import { Match } from '@matches/domain/match'
import { MatchesRepository } from '@matches/repositories/MatchesRepository'
import { AppError } from '@shared/errors/AppError'

type Props = {
  user_id: string
  company_id: string
}

export class CompanyLikesUser {
  constructor(
    private usersRepo: UsersRepository,
    private companiesRepo: CompaniesRepository,
    private matchesRepo: MatchesRepository
  ) {}

  async execute({ user_id, company_id }: Props) {
    const existsUser = await this.usersRepo.exists(user_id)

    if (!existsUser) {
      throw new AppError('user id wrongfully provided')
    }

    const existsCompany = await this.companiesRepo.exists(company_id)

    if (!existsCompany) {
      throw new AppError('company id wrongfully provided')
    }

    const existsMatch = await this.matchesRepo.exists(user_id, company_id)

    if (!existsMatch) {
      const match = Match.create({ user_id, company_id, company_liked: true })
      await this.matchesRepo.create(match)
      return
    }

    const match = (await this.matchesRepo.findByUserAndCompany(user_id, company_id))?.props
    if (match?.company_liked) {
      throw new AppError('you cant like a user more than once')
    }

    await this.matchesRepo.update(
      Match.create({
        id: match?.id!,
        user_id: match?.user_id!,
        company_id: match?.company_id!,
        company_liked: true
      })
    )

    const itsAMatch = await this.matchesRepo.itsAMatch(match?.id!)
    console.log('itsAMatch:', itsAMatch)
  }
}
