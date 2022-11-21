import CustomError from './custom-error'

export class MissingParamError extends CustomError {
  constructor (message: string) {
    super(message, 400)
  }
}
