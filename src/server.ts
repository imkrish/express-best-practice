import * as express from 'express'
import { setupMiddleware } from './middleware/setupMiddleware'
import { globalErrorHandling } from './middleware/globalErrorHandling'
import { apiRouter } from './api/api.router'

// export the app for testing
export const app = express()

// setup the app midleware
setupMiddleware(app)

// setup the api
app.use('/api', apiRouter)

// setup global error handling
app.use(globalErrorHandling)
