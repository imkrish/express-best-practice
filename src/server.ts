import * as express from 'express'
import { setupMiddleware } from './middleware/setupMiddleware'
import { globalErrorHandling } from './middleware/globalErrorHandling'
import { apiRouter } from './api/api.router'
import { connectToMongoDB } from './db'

// export the app for testing
export const app = express()

// connect to mongo db
export const mongoDB = connectToMongoDB()

// setup the app midleware
setupMiddleware(app)

// setup the api
app.use('/api', apiRouter)

// catch all
app.all('*', (_req, res) => {
    res.json({ok: true})
})

// setup global error handling
app.use(globalErrorHandling)
