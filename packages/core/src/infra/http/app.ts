import express from 'express'
import 'express-async-errors'
import { errorMiddleware } from './middlewares/errorMiddleware'
import { router } from './routes'

const app = express()

app.use(express.json({ type: ['application/json', 'text/plain'] }))

app.use(router)

app.use(errorMiddleware)

export { app }
