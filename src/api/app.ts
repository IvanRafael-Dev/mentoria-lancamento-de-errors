import { errorMiddleware } from './../middlewares/errorMiddleware'
import express from 'express'
import { movieRouter } from '../routes/movieRouter'

class App {
  public app: express.Express

  constructor () {
    this.app = express()
    this.config()
    this.routes()
  }

  private routes (): void {
    this.app.use('/movies', movieRouter)
    this.app.use(errorMiddleware)
  }

  private config (): void {
    this.app.use(express.json())
  }

  public start (port: number): void {
    this.app.listen(port, () => console.log(`Running at PORT: ${port}`))
  }
}

export { App }
