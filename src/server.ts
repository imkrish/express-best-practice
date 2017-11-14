import * as express from 'express'
import { setupMiddleware } from './middleware/setupMiddleware'
import { globalErrorHandling } from './middleware/globalErrorHandling'
import { apiRouter } from './api/api.router'
import { connectToMongoDB } from './db'
import { authProtectMiddlewares, signinMiddlewares } from './api/modules/auth'

// export the app for testing
export const app = express()

// connect to mongo db
connectToMongoDB()

// setup the app midleware
setupMiddleware(app)

// setup the api
app.use('/signin', signinMiddlewares)
app.use('/api', authProtectMiddlewares, apiRouter)

// catch all
app.all('*', (_req, res) => {
    res.json({message: 'catch all *'})
})

// setup global error handling
app.use(globalErrorHandling)
