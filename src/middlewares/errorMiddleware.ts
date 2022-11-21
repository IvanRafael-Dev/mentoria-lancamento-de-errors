import { ErrorRequestHandler } from 'express'
import CustomError from '../errors/custom-error'

export const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ error: err.message })
  }
  return res.status(500).json('Internal Server Error')
}
