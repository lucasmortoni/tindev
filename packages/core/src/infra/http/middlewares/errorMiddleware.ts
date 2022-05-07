import { AppError } from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'

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
  return res.status(500).json({
    status: 'error',
    message: `Internal Server Error - ${err.message}`
  })
}
