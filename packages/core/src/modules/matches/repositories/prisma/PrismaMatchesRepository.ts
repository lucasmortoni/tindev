import { MatchesRepository } from '@matches/repositories/MatchesRepository'
import { Match } from '@matches/domain/match'
import { prisma } from '@infra/prisma/client'

export class PrismaMatchesRepository implements MatchesRepository {
  async create(match: Match): Promise<void> {
    await prisma.match.create({ data: match.props })
  }
}
