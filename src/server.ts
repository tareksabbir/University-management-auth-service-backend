/* eslint-disable no-console */
import mongoose from 'mongoose'
import config from './config'
import app from './app'
import { logger, errorLogger } from './shared/logger'
import { Server } from 'http'

let server: Server

process.on('uncaughtException', err => {
  errorLogger.error(err)
  process.exit(1)
})

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`🧑‍💻 Database connected successfully`)
    server = app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error(`Database is not connected`)
  }
  process.on('unhandledRejection', err => {
    console.log(
      'unhandled Rejection is detected we are closing our server......'
    )
    if (server) {
      server.close(() => {
        errorLogger.error(err)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrap()

process.on('SIGTERM', () => {
  logger.info('SIGTERM IS RECEIVED')
  if (server) {
    server.close()
  }
})
