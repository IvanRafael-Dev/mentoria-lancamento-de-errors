export interface IMovie {
  id?: number
  title: string
  genre: string
  year: number
  director: string
}

export interface IMovieService {
  add (movie: IMovie): Promise<IMovie>
}
