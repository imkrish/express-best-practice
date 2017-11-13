import * as express from 'express'
import { appConfig } from './config/appConfig'
import { setupMiddleware } from './middleware/setupMiddleware'
import { apiRouter } from './api/apiRouter'
import { globalErrorHandling } from './middleware/globalErrorHandling'

// export the app for testing
export const app = express()

// setup the app midleware
setupMiddleware(app)

// setup the api
app.use('/api', apiRouter)

// setup global error handling
app.use(globalErrorHandling)

// start listening
app.listen(appConfig.port, () => console.info(`Server is running on port: ${appConfig.port}`))
