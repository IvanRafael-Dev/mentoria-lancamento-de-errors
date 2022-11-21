import { IMovie } from './../../../service/interfaces/IMovieService'

export interface IMovieValidations {
  checkMovie(movie: IMovie): void
  checkMovieTitle (title: string): void
  checkMovieGenre (genre: string): void
  checkMovieYear (year: number): void
  checkMovieDirector(director: string): void
}
