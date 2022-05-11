import express from 'express'
import 'express-async-errors'
import { router } from '@infra/http/routes'

import { graphqlHTTP } from 'express-graphql'
import schema from '@infra/graphql'

import { errorMiddleware } from '@infra/http/middlewares/errorMiddleware'

const app = express()

app.use(express.json({ type: ['application/json', 'text/plain'] }))

app.use(router)

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.use(errorMiddleware)

export { app }
