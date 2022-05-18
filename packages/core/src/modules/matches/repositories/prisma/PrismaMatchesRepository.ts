import { MatchesRepository } from '@matches/repositories/MatchesRepository'
import { Match } from '@matches/domain/match'
import { prisma } from '@infra/prisma/client'

export class PrismaMatchesRepository implements MatchesRepository {
  async create(match: Match): Promise<void> {
    await prisma.match.create({ data: match.props })
  }

  async exists(user_id: string, company_id: string): Promise<boolean> {
    const result = await prisma.match.findFirst({ where: { AND: { user_id, company_id } } })

    return !!result
  }

  async findByUserAndCompany(user_id: string, company_id: string): Promise<Match | null> {
    const result = await prisma.match.findMany({ where: { AND: { user_id, company_id } } })

    if (!result) {
      return null
    }
    const match = Match.create(result[0])

    return match
  }

  async update(match: Match): Promise<void> {
    await prisma.match.update({ where: { id: match.props.id }, data: match.props })
  }
}
