import CustomError from './custom-error'

export class InvalidParamError extends CustomError {
  constructor (message: string) {
    super(message, 401)
  }
}
