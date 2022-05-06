import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const prismaConnection = async prisma => {
  await prisma.$connect()
  console.log('prisma connection is good to go')
}

export { prisma, prismaConnection }
