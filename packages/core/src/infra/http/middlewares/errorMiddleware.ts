import { NextFunction, Request, Response } from 'express'
import { AppError } from '@shared/errors/AppError'
import { ValidationError } from 'yup'

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.statusMessage
    })
  }

  if (err instanceof ValidationError) {
    return res.status(400).json({
      message: err.errors
    })
  }

  return res.status(500).json({
    message: `Internal Server Error - ${err.message}`
  })
}
