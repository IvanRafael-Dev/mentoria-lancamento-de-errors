import { MissingParamError } from './../../errors/missing-param-error'
import { IMovie } from '../../service/interfaces/IMovieService'
import { IMovieValidations } from './interfaces/IMovieValidations'
import { InvalidParamError } from '../../errors/invalid-param-error'

export default class MovieValidations implements IMovieValidations {
  checkMovieTitle (title: string): void {
    if (!title) {
      throw new MissingParamError('Titulo é obrigatório')
    }

    if (title.length < 3) {
      throw new InvalidParamError('Titulo deve conter mais do que 3 chars')
    }
  }

  checkMovieGenre (genre: string): void {
    if (!genre) {
      throw new MissingParamError('Gênero é obrigatório')
    }
  }

  checkMovieYear (year: number): void {
    if (!year) {
      throw new MissingParamError('Ano é obrigatório')
    }
  }

  checkMovieDirector (director: string): void {
    if (!director) {
      throw new MissingParamError('Diretor é obrigatório')
    }
  }

  checkMovie (movie: IMovie): void {
    this.checkMovieTitle(movie.title)
    this.checkMovieGenre(movie.genre)
    this.checkMovieYear(movie.year)
    this.checkMovieDirector(movie.director)
  }
}
