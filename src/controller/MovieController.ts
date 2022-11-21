import { NextFunction, Request, Response } from 'express'
import { IMovieService } from '../service/interfaces/IMovieService'

export default class MovieController {
  private readonly movieService: IMovieService

  constructor (movieService: IMovieService) {
    this.movieService = movieService
  }

  async add (req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const movie = await this.movieService.add(req.body)
      return res.status(201).json(movie)
    } catch (error) {
      next(error)
    }
  }
}
