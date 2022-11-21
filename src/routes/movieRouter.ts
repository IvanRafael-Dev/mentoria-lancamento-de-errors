import { Router } from 'express'
import MovieController from '../controller/MovieController'
import MovieService from '../service/MovieService'
import MovieValidations from '../validations/movies/MovieValidations'

const router = Router()

const movieValidations = new MovieValidations()
const movieService = new MovieService(movieValidations)
const movieController = new MovieController(movieService)

router
  .post('/', (req, res, next) => movieController.add(req, res, next))

export { router as movieRouter }
