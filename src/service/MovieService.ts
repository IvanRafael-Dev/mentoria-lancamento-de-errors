import { IMovieValidations } from '../validations/movies/interfaces/IMovieValidations'
import { IMovie, IMovieService } from './interfaces/IMovieService'

export default class MovieService implements IMovieService {
  private readonly movieValidations: IMovieValidations

  constructor (movieValidations: IMovieValidations) {
    this.movieValidations = movieValidations
  }

  async add (movie: IMovie): Promise<IMovie> {
    this.movieValidations.checkMovie(movie)
    // salvar o filme no db
    // retornar o filme salvo
    return { id: 1, ...movie }
  }
}
