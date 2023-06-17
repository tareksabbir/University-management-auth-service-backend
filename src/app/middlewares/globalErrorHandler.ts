import { ErrorRequestHandler } from 'express'
import { IGenericErrorMessage } from '../../interfaces/error'
import config from '../../config'
import { handleValidationError } from '../../errors/handleValidation'
import ApiError from '../../errors/ApiError'

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500
  let message = 'something went wrong!'
  let errorMessages: IGenericErrorMessage[] = []

  if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (err instanceof ApiError) {
    statusCode = err?.statusCode
    message = err?.message
    errorMessages = err?.message
      ? [
          {
            path: '',
            message: err?.message,
          },
        ]
      : []
  } else if (err instanceof Error) {
    message = err?.message
    errorMessages = err?.message
      ? [
          {
            path: '',
            message: err?.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? err?.stack : undefined,
  })

  next()
}

export default globalErrorHandler
