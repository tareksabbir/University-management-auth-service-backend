import mongoose from 'mongoose'
import config from './config'
import app from './app'
import { logger, errorLogger } from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`🧑‍💻 Database connected successfully`)
    app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error(`Database is not connected`)
  }
}

bootstrap()
