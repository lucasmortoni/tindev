import { app } from './app'
import { prisma, prismaConnect } from '@infra/prisma/client'

app.get('/', (req, res) => {
  return res.json({ msg: 'hello world' })
})

app.listen(3333, async () => {
  console.log('tindev server is up and running 🚀')
  await prismaConnect(prisma)
})
