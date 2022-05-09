import express from 'express'
import 'express-async-errors'
import { router } from './routes'

import { graphqlHTTP } from 'express-graphql'
import schema from '../graphql'

import { errorMiddleware } from './middlewares/errorMiddleware'

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
