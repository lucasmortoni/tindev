import { Match, MatchProps } from '@matches/domain/match'
import { MatchesRepository } from '@matches/repositories/MatchesRepository'

export class CreateMatch {
  constructor(private matchesRepo: MatchesRepository) {}

  async execute(data: MatchProps) {
    const match = Match.create(data)
    await this.matchesRepo.create(match)
  }
}
