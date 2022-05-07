export class AppError {
  public readonly statusCode: number
  public readonly statusMessage: string

  constructor(statusMessage: string, statusCode = 400) {
    this.statusCode = statusCode
    this.statusMessage = statusMessage
  }
}
