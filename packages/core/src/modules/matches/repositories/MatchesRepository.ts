import { Match } from '@matches/domain/match'

export interface MatchesRepository {
  create(match: Match): Promise<void>
  exists(user_id: string, company_id: string): Promise<boolean>
  findByUserAndCompany(user_id: string, company_id: string): Promise<Match | null>
  update(match: Match): Promise<void>
  itsAMatch(id: string): Promise<boolean>
}
