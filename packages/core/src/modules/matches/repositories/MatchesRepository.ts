import { Match } from '@matches/domain/match'

export interface MatchesRepository {
  create(match: Match): Promise<void>
}
