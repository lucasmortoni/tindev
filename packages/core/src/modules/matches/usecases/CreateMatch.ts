import { Match, MatchProps } from '@matches/domain/match'
import { MatchesRepository } from '@matches/repositories/MatchesRepository'
import { AppError } from '@shared/errors/AppError'

export class CreateMatch {
  constructor(private matchesRepo: MatchesRepository) {}

  async execute(data: MatchProps) {
    const { user_id, company_id } = data

    const existsMatch = await this.matchesRepo.exists(user_id, company_id)

    if (existsMatch) {
      throw new AppError('match cant be created because one already exists')
    }

    const match = Match.create(data)
    await this.matchesRepo.create(match)
  }
}
